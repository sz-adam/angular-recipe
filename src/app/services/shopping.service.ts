import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  constructor() { }

  private ingredients: Ingredient[] = []

  addIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
    console.log(this.ingredients)
  }
}
