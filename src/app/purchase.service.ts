import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchase } from './purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private url: string;
  private purchases: Purchase[];
  constructor(private http: HttpClient) {
    this.url = "http://localhost:9003/purchase"
  }

  public createPurchase(purchase: Purchase) {
    return this.http.post<Purchase>(this.url, purchase);
  }

  public getAllPurchases(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(this.url + "s");
  }

  public findByPurchaseId(purchaseId: number): Observable<Purchase> {
    return this.http.get<Purchase>(this.url + "/" + purchaseId);
  }

  public findByPurchaseDate(purchaseDate: Date): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(this.url+ "s" + "/" + purchaseDate);
  }

}
