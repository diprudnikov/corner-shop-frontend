import {Component, Input} from '@angular/core';
import {ShoppingService} from '../../core/services/shopping.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input() product: any;

  constructor(private http: HttpClient, private shoppingService: ShoppingService) {
  }

  add(itemId: number) {
    this.shoppingService.addProductToCart(itemId);
  }

  remove(itemId: number) {
    this.shoppingService.removeProductFromCart(itemId);
  }
}