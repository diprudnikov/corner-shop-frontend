import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

const BASE_URL = 'http://localhost:3000';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private itemsCountSubject: Subject<number> = new Subject();
  public counter: number;
  public itemsCount$: Observable<number> = this.itemsCountSubject.asObservable();

  constructor(private http: HttpClient) {
    const sizeSubscription = this.getCartSize().subscribe((res: { cartCount: number }) => {
      this.counter = res.cartCount;
      this.itemsCountSubject.next(this.counter);
      sizeSubscription.unsubscribe();
    }, () => {
      this.counter = 0;
      this.itemsCountSubject.next(this.counter);
    });
  }

  public getProducts(): Observable<any> {
    return this.http.get<any[]>(`${BASE_URL}/products`, httpOptions);
  }

  public addProductToCart(itemId: number): void {
    const body = {itemId};
    this.http.post(`${BASE_URL}/cart`, body, httpOptions).subscribe(() => this.updateCartCounter());
  }

  public removeProductFromCart(itemId: number): void {
    this.http.delete(`${BASE_URL}/cart/${itemId}`, httpOptions).subscribe(() => this.updateCartCounter());
  }

  public getCart() {
    return this.http.get<object[]>(`${BASE_URL}/cart`, httpOptions);
  }

  private getCartSize() {
    return this.http.get<object>(`${BASE_URL}/cart/count`, httpOptions);
  }

  public isCartNotEmpty() {
    return !!this.counter;
  }

  public getCartCheckout() {
    return this.http.get<any>(`${BASE_URL}/cart/checkout`, httpOptions);
  }

  private updateCartCounter() {
    const sizeSubscription = this.getCartSize().subscribe((res: { cartCount: number }) => {
      this.counter = res.cartCount;
      this.itemsCountSubject.next(this.counter);
      sizeSubscription.unsubscribe();
    });
  }
}
