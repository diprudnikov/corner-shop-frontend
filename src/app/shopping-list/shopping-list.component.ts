import {Component, OnInit} from '@angular/core';
import {ShoppingService} from '../core/services/shopping.service';
import {Observable} from 'rxjs';
import {Product} from '../core/interfaces/Product';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public products$: Observable<Product[]>;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.products$ = this.shoppingService.getProducts();
  }

}
