import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ShoppingService} from '../../core/services/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutGuard implements CanActivate {
  constructor(public shoppingService: ShoppingService, public router: Router) {
  }

  canActivate(): Observable<boolean> {
    return new Observable((observer) => {
      const isCartNotEmpty = this.shoppingService.isCartNotEmpty();
      if (!isCartNotEmpty) {
        this.router.navigate(['/products']);
      }
      observer.next(isCartNotEmpty);
    });
  }
}
