import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

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

    constructor(private shoppinhListService: ShoppingListService) {}
    
    getRecipes() {
        //no args slice will return a copy of this service's array
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppinhListService.addIngredients(ingredients);
    }
    
}