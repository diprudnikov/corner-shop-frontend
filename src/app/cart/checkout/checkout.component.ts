import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ShoppingService} from '../../core/services/shopping.service';
import {Product} from '../../core/interfaces/Product';
import {Checkout} from '../../core/interfaces/Checkout';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public checkout$: Observable<Checkout>;
  public products: Product[];
  public totalSum: number;
  public totalTax: number;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.checkout$ = this.shoppingService.getCartCheckout();
    this.checkout$.toPromise().then((checkout) => {
      this.totalSum = checkout.totalSum;
      this.totalTax = checkout.totalTax;
      this.products = checkout.products;
    });
  }
}
