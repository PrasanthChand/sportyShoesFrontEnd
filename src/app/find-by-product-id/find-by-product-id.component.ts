import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-find-by-product-id',
  templateUrl: './find-by-product-id.component.html',
  styleUrls: ['../app.component.css']
})
export class FindByProductIdComponent {
  public product: Product;
  public productId: number;

  constructor(private service: ProductService) { 
    this.product = new Product();
  }

  findByProductId() {
    this.service.findByProductId(this.productId).subscribe(data => {
      this.product = data;
    });
  }
}
