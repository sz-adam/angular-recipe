import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { RecipeService } from '../../services/recipe.service';
import { RouterLink } from '@angular/router';
import { RecipeDetailComponent } from '../../pages/recipe-detail/recipe-detail.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterLink,RecipeDetailComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
