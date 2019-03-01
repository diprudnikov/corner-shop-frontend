import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {ShoppingService} from '../../core/services/shopping.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  private checkout: any;
  private checkoutSubscription: Subscription;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.checkout = {
      products: [],
    };
    this.checkoutSubscription = this.shoppingService.getCartCheckout().subscribe((response) => {
      this.checkout = response;
    });
  }

  ngOnDestroy() {
    this.checkoutSubscription.unsubscribe();
  }
}
