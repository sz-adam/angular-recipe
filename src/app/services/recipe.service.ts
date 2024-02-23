import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { Ingredient } from '../model/ingredient';
import { Subject } from 'rxjs';
import { ShoppingService } from './shopping.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  constructor(private shoppingServices: ShoppingService) {}

  private recipes: Recipe[] = [];

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
 
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
   addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.shoppingServices.addIngredients(ingredient);
  }

}
