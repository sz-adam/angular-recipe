import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'; 
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../../model/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class RecipeEditComponent implements OnInit {
  recipeForm!: FormGroup;
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private formBuilder: FormBuilder 
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const recipeId = +params['id'];
      this.editMode = params['id'] != null;

      //editMode adatbetöltés a formba
      if (this.editMode) {
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
    // recept betöltése vagy üres form
    this.recipeForm = this.formBuilder.group({
      name: [recipe ? recipe.name : '', Validators.required],
      imagePath: [recipe ? recipe.imagePath : '', Validators.required],
      description: [recipe ? recipe.description : '', Validators.required],
      // A hozzávalókhoz hozzáadása 
    });
  }
}
