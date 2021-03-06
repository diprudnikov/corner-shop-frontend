import { Component, Input } from '@angular/core';
import { ShoppingService } from '../../core/services/shopping.service';
import { Product } from '../../core/interfaces/Product';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() product: Product;

  constructor(private shoppingService: ShoppingService) {
  }

  add(itemId: number) {
    this.shoppingService.addProductToCart(itemId).subscribe();
  }
}
