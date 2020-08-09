import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['../app.component.css']
})
export class UpdateProductComponent implements OnInit {
  public product: Product;
  public products: Product[];

  constructor(private service: ProductService, private route: Router) {
    this.product = new Product();
  }
  ngOnInit() {
    this.service.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }
  updateProduct() {
    return this.service.updateProduct(this.product).subscribe(data => {
      this.product = new Product();
      this.route.navigate(['/getAllProducts']);
    });
  }



}
