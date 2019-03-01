import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingService} from '../core/services/shopping.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private products: any;
  private productsSubscription: Subscription;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.productsSubscription = this.shoppingService.getProducts().subscribe((response) => {
      console.log(response);
      this.products = response;
    });
  }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }

}
