import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit
{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("Chicken Cornflakes","Fried Chicken with cornflakes","https://upload.wikimedia.org/wikipedia/commons/c/c9/McD-Chicken-Selects.jpg"),
    new Recipe("TEST Cornflakes","Fried Chicken with cornflakes","https://upload.wikimedia.org/wikipedia/commons/c/c9/McD-Chicken-Selects.jpg")
  ];
  constructor(){}
  ngOnInit(): void {
    
  }
  onRecipeSelected(item: Recipe)
  {
    this.recipeWasSelected.emit(item);
  }
}
