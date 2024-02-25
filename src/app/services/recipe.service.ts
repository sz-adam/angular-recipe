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

  private recipes: Recipe[] = [
    new Recipe(
          'A test recepie',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio cumque veritatis libero debitis, quibusdam obcaecati cupiditate reprehenderit voluptatibus nostrum rerum beatae dolorum aspernatur eveniet totam expedita molestias nesciunt. Dolorem rem fugiat quasi omnis blanditiis. Ducimus voluptatibus eligendi reiciendis esse, aliquid molestiae inventore doloribus quas reprehenderit adipisci. Culpa quos ullam harum soluta cum et, sed libero natus quia! Repellat quaerat vitae tenetur hic provident, aliquid rerum dignissimos minima numquam mollitia ab a doloremque reprehenderit similique ut porro temporibus vero? Omnis, molestias minus? Architecto, quisquam voluptas aspernatur excepturi est odio in tenetur praesentium eius dolorem laborum enim vitae minima consequuntur non?',
          'https://images.pexels.com/photos/6287519/pexels-photo-6287519.jpeg?auto=compress&cs=tinysrgb&w=600',
          [new Ingredient('Lorem', 1), new Ingredient('Lorem', 2)]
        ),
        new Recipe(
          'Ab test recepie',
          '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio cumque veritatis libero debitis, quibusdam obcaecati cupiditate reprehenderit voluptatibus nostrum rerum beatae dolorum aspernatur eveniet totam expedita molestias nesciunt. Dolorem rem fugiat quasi omnis blanditiis. Ducimus voluptatibus eligendi reiciendis esse, aliquid molestiae inventore doloribus quas reprehenderit adipisci. Culpa quos ullam harum soluta cum et, sed libero natus quia! Repellat quaerat vitae tenetur hic provident, aliquid rerum dignissimos minima numquam mollitia ab a doloremque reprehenderit similique ut porro temporibus vero? Omnis, molestias minus? Architecto, quisquam voluptas aspernatur excepturi est odio in tenetur praesentium eius dolorem laborum enim vitae minima consequuntur non?',
          'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          [new Ingredient('Lorem', 2)]
        ),
  ];

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
