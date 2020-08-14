import { Injectable } from '@angular/core';
import { Purchase } from './purchase';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  private url: string;
  private purchases: Purchase[];
  constructor(private http: HttpClient) {
    this.url = "http://localhost:9003/purchase"
  }

  public createPurchase(purchase: Purchase) {
    return this.http.post<Purchase>(this.url, purchase);
  }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
