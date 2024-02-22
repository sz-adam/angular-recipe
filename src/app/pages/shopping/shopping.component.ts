import { Component } from '@angular/core';
import { ShoppingListComponent } from '../../components/shopping-list/shopping-list.component';
import { AddShoppingComponent } from '../../components/add-shopping/add-shopping.component';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [AddShoppingComponent,ShoppingListComponent],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {

}
