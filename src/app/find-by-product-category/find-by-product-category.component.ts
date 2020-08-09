import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-find-by-product-category',
  templateUrl: './find-by-product-category.component.html',
  styleUrls: ['../app.component.css']
})
export class FindByProductCategoryComponent {
  public products:Product[];
  public product: Product;
  public productCategory: Text;

  constructor(private service: ProductService) { 
    this.product = new Product();
  }

  findByProductCategory() {
    this.service.findByProductCategory(this.productCategory).subscribe(data => {
      this.products = data;
    });
  }

}



