import { Ingredient } from '../shared/ingredient.model';

import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    // because getIngredients() is returbing a copy via slice(), an event is needed to inform component that new data is available when addIngredient() is used 
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Chicken Breast', 4),
        new Ingredient('Bacon', 4)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        /* not ideal as we would be emitting a lot of events for each ingredient addition in the loop
        for (let ingredient of ingredients) {
            this.addIngredient(ingredient);
        }*/
        // push can handle multiple objects or push the array as an object to other array, so can use ES6 feature - spread operator to turn array to list
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}