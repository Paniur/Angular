import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService
{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('chiken',500),
        new Ingredient('cornflakes',1)
    ]

    getIngredients()
    {
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient)
    {
        let indexOfIngredient = this.ingredients.findIndex((myIngredient) => myIngredient.name === ingredient.name);
        if(indexOfIngredient == -1)
        {
            this.ingredients.push(ingredient);
            this.ingredientsChanged.emit(this.ingredients.slice());
        }
        else
        {
            this.ingredients[indexOfIngredient].amount += ingredient.amount;
            this.ingredientsChanged.emit(this.ingredients.slice());
        }
        
    }
    addIngredients(ingredients: Ingredient[])
    {
        for(let ingredient of ingredients)
        {
            let indexOfIngredient = this.ingredients.findIndex((myIngredient) => myIngredient.name === ingredient.name);
            if(indexOfIngredient == -1)
            {
                this.ingredients.push(ingredient);
                //this.ingredientsChanged.emit(this.ingredients.slice());
            }
            else
            {
                this.ingredients[indexOfIngredient].amount += ingredient.amount;
                //this.ingredientsChanged.emit(this.ingredients.slice());
            }
        }
        //this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}