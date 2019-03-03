import {Component, OnInit} from '@angular/core';
import {ShoppingService} from '../core/services/shopping.service';
import {Observable} from 'rxjs';
import {Product} from '../core/interfaces/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart$: Observable<Product[]>;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.cart$ = this.shoppingService.getCart();
  }

  deleteFromCart(itemId) {
    this.shoppingService.removeProductFromCart(itemId).subscribe(() => {
      this.cart$ = this.shoppingService.getCart();
    });
  }
}
