import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { Ingredient } from '../model/ingredient';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  private recipes: Recipe[] = [
    new Recipe(
     
      'A test recepie',
      'this test dsdsa',
      'https://images.pexels.com/photos/6287519/pexels-photo-6287519.jpeg?auto=compress&cs=tinysrgb&w=600',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
      ),
    new Recipe(
     
      'Ab test recepie',
      'this test ',
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
      ),
    new Recipe(
     
      'Ab test recepie',
      'this test ',
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
      ),
    new Recipe(
     
      'Ab test recepie',
      'this test ',
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
      ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
}
