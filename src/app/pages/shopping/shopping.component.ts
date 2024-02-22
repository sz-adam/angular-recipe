import { Component } from '@angular/core';
import { ShoppingListComponent } from '../../components/shopping-list/shopping-list.component';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [ShoppingListComponent],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {

}
