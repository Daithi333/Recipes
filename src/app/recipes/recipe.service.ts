import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Bacon wrapped Chicken', 
      'Easy to make and goes well on any occasion!', 
      'https://img.taste.com.au/UCkD8VfP/w1200-h630-cfill/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg', 
      [
        new Ingredient('Chicken', 4),
        new Ingredient('Bacon', 4)
      ]), 
    new Recipe(
      'Stonebaked Pizza', 
      'Delicious authentic Florentine Stone-baked Pizza!', 
      'https://www.bbcgoodfood.com/sites/default/files/categories/categories-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg', 
      [
        new Ingredient('Pizza base', 1),
        new Ingredient('Tomato sauce', 4),
        new Ingredient('Mozerella', 50),
        new Ingredient('Mushrooms', 10),
        new Ingredient('Basil', 20)
      ])
    ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
    
  getRecipes() {
    //no args slice will return a copy of this service's array
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    // slice will give a copy, could directly return or create hardcopy with 'object assign'
    return this.recipes.slice()[index];
  } 

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
  
}