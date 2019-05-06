import { Component, OnInit, OnChanges } from '@angular/core';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit, OnChanges {
  isRecipesEmpty = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    if (this.recipeService.getRecipes.length === 0) {
      this.isRecipesEmpty = true;
    }
  }

  ngOnChanges() {
    if (this.recipeService.getRecipes.length === 0) {
      this.isRecipesEmpty = true;
    }
  }

}
