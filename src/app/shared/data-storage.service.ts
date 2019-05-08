import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, 
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://udemy-recipe-book-7f811.firebaseio.com//recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  // added pipe(map()) to ensure each recipe has an ingredients array (even though may be empty), so it satisfys the Recipe model and not cause any errors
  getRecipes() {
    const token = this.authService.getToken();
    this.authService.getToken()
    // retrieve token and pass to firebase in query string 'auth='
    this.http.get('https://udemy-recipe-book-7f811.firebaseio.com//recipes.json?auth=' + token)
      .pipe(map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if(!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}