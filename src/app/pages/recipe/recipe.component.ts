import { Component } from '@angular/core';
import { RecipeListComponent } from '../../components/recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [RecipeListComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {

}
