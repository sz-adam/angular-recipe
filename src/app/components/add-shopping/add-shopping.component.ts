import { Component } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-shopping',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-shopping.component.html',
  styleUrl: './add-shopping.component.scss'
})
export class AddShoppingComponent {
  
  constructor(private shoppingService: ShoppingService) {}

  onSubmit(form: NgForm) {
    const name = form.value.newIngredientName;
    const amount = form.value.newIngredientAmount;    
    this.shoppingService.addIngredients([{ name, amount }]);     
    form.resetForm();
  }

}