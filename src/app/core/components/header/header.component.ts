import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingService} from '../../services/shopping.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private itemsCountSubscription: Subscription;
  private itemsCount: number;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.itemsCountSubscription = this.shoppingService.itemsCount$.subscribe((count) => {
      this.itemsCount = count;
    });
  }

  ngOnDestroy() {
    this.itemsCountSubscription.unsubscribe();
  }

}
