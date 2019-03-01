import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingService} from '../core/services/shopping.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  private products: object[];
  private cartSubscription: Subscription;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.cartSubscription = this.shoppingService.getCart().subscribe((response: any[]) => {
      this.products = response.map(item => item.product);
    });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}
