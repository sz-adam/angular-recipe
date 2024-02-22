import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../model/ingredient';
import { ShoppingService } from '../../services/shopping.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  editMode: boolean = false;
  editingIndex: number | null = null;

  constructor(private shoppingService: ShoppingService) {}
  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe((ingredients: Ingredient[]) =>{
      this.ingredients = ingredients
    });
    console.log(this.ingredients)
  }
 
  toggleEditMode(index: number) {
    this.editMode = !this.editMode;
    this.editingIndex = this.editMode ? index : null;
  }

  saveChanges() {
    this.editMode = false;
    this.editingIndex = null;
  }
}
