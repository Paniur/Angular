import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.module";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService
{
    public recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe("Chicken Cornflakes","Fried Chicken with cornflakes","https://upload.wikimedia.org/wikipedia/commons/c/c9/McD-Chicken-Selects.jpg",[new Ingredient('Chicken',1),new Ingredient('Cornflakes',1)]),
        new Recipe("TEST Cornflakes","Fried Chicken with cornflakes","https://upload.wikimedia.org/wikipedia/commons/c/c9/McD-Chicken-Selects.jpg",[new Ingredient('Chicken',1),new Ingredient('Cornflakes',1)])
      ];

      constructor(private slService: ShoppingListService)
      {

      }
    getRecipes()
    {
        return this.recipes.slice();
    }

    addIngridientsToShoppingList(ingredients:Ingredient[])
    {
        // ingredients.forEach(ingredient => {
        //     this.slService.addIngredient(ingredient);
        // });
        this.slService.addIngredients(ingredients);
    }
}