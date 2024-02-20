import { Routes } from '@angular/router';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';

export const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },

  {
    path: 'recipes',
    component: RecipeComponent,
  },
  { path: 'shopping', component: ShoppingComponent },
];
