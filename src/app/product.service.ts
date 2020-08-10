import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string;
  private products: Product[];
  constructor(private http: HttpClient) {
    this.url = "http://localhost:9003/product"
  }

  public createProduct(product: Product) {
    return this.http.post<Product>(this.url, product);
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + "s");
  }

  public deleteByProductId(productId: number): Observable<Product> {
    return this.http.delete<Product>(this.url + "/" + productId);
  }

  public findByProductId(productId: number): Observable<Product> {
    return this.http.get<Product>(this.url + "/" + productId);
  }

  public findByProductCategory(productCategory: Text): Observable<Product[]> {
    return this.http.get<Product[]>(this.url+ "s" + "/" + productCategory);
  }

  public updateProduct(product: Product) {
    return this.http.put<Product>(this.url, product);
  }

  public productCart(product: Product) {
    return this.http.put<Product>(this.url, product);
  }
}
