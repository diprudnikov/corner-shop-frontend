import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from '../interfaces/Product';
import { Checkout } from '../interfaces/Checkout';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

const URLS = environment.URLS;

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(URLS.PRODUCTS, HTTP_OPTIONS);
  }

  public addProductToCart(itemId: number): Observable<Product> {
    const body = { itemId };
    return this.http.post<Product>(URLS.CART, body, HTTP_OPTIONS);
  }

  public removeProductFromCart(itemId: number): Observable<unknown> {
    return this.http.delete(`${URLS.CART}/${itemId}`, HTTP_OPTIONS);
  }

  public getCart(): Observable<Product[]> {
    return this.http.get<Product[]>(URLS.CART, HTTP_OPTIONS);
  }

  public getCartCheckout(): Observable<Checkout> {
    return this.http.get<Checkout>(URLS.CHECKOUT, HTTP_OPTIONS);
  }
}
