import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ShoppingService} from '../../core/services/shopping.service';
import {Checkout} from '../../core/interfaces/Checkout';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public checkout$: Observable<Checkout>;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.checkout$ = this.shoppingService.getCartCheckout();
  }
}
