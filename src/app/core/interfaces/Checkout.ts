import {Product} from './Product';

export interface Checkout {
  totalSum: number;
  totalTax: number;
  products: Product[];
}
