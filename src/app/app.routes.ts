import { Routes } from '@angular/router';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './pages/recipe-edit/recipe-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: 'new', component: RecipeEditComponent },
  { path: ':id/edit', component: RecipeEditComponent },
  { path: 'shopping', component: ShoppingComponent },
];
