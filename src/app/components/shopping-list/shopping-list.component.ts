import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../model/ingredient';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingService: ShoppingService) {}
  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe((ingredients: Ingredient[]) =>{
      this.ingredients = ingredients
    });
    console.log(this.ingredients)
  }
 

}
