import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  index: number = 0;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const recipeId = +params['id'];
      this.index = recipeId;
      this.recipe = this.recipeService.getRecipe(recipeId);
    });
  }
  onEditClick() {
    // Navigáció az edit oldalra a recipeId-vel
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  deleteRecipe() {
    this.recipeService.deleteRecipes(this.index);
    this.router.navigate(['/recipes']);
  }
  addShoppingIngredient() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
    this.router.navigate(['/shopping']);
  }
}
