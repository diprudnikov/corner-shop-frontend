import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URLS} from '../../../config/config';
import {Product} from '../interfaces/Product';
import {Checkout} from '../interfaces/Checkout';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(URLS.PRODUCTS, httpOptions);
  }

  public addProductToCart(itemId: number): void {
    const body = { itemId };
    this.http.post(URLS.CART, body, httpOptions).subscribe();
  }

  public removeProductFromCart(itemId: number): void {
    this.http.delete(`${URLS.CART}/${itemId}`, httpOptions).subscribe();
  }

  public getCart(): Observable<Product[]> {
    return this.http.get<Product[]>(URLS.CART, httpOptions);
  }

  public getCartCheckout(): Observable<Checkout> {
    return this.http.get<Checkout>(URLS.CHECKOUT, httpOptions);
  }
}
