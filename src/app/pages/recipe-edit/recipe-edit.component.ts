import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../../model/recipe';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { Ingredient } from '../../model/ingredient';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class RecipeEditComponent implements OnInit {
  recipeForm!: FormGroup;
  editMode: boolean = false;
  recipeId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const recipeId = +params['id'];
      this.editMode = params['id'] != null;

      //editMode adatbetöltés a formba
      if (this.editMode) {
        this.recipeId = recipeId;
        const recipe = this.recipeService.getRecipe(recipeId);
        this.initForm(recipe);
      } else {
        // új recept esetén üres form
        this.initForm();
      }
    });
  }

  // Az űrlap inicializálása
  private initForm(recipe?: Recipe) {
    this.recipeForm = this.formBuilder.group({
      name: [recipe ? recipe.name : '', Validators.required],
      imagePath: [recipe ? recipe.imagePath : '', Validators.required],
      description: [recipe ? recipe.description : '', Validators.required],
      // Hozzávalók
      ingredients: this.formBuilder.array([]),
    });

    // ha van hozzávalók betölti őket , amúgy üresset tölt be
    if (recipe && recipe.ingredients) {
      recipe.ingredients.map((ingredient: Ingredient) => {
        this.addIngredient(ingredient.name, ingredient.amount);
      });
    } else {
      this.addIngredient();
    }
  }

  // input mező létrehozása 
  addIngredient(name: string = '', amount: number = 0) {
    const ingredientGroup = this.formBuilder.group({
      name: [name, Validators.required],
      amount: [amount, Validators.required],
    });
    //betöltés
    this.ingredientsFormArray.push(ingredientGroup);
  }
  // html megjelenítés
  get ingredientsFormArray() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  saveRecipe() {
    const formData = this.recipeForm.value;

    if (this.editMode) {
      this.recipeService.updateRecipe(this.recipeId, formData);
    } else {
      this.recipeService.addRecipe(formData);
    }
    this.router.navigate(['/recipes']);
  }
}
