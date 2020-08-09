import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['../app.component.css']
   
})
export class CreateProductComponent {
  public product: Product;
  constructor(private service:ProductService, private router:Router) { 
    this.product = new Product();
  }
createProduct(){
  this.service.createProduct(this.product).subscribe(data=>{
    this.product = new Product();
    this.router.navigate(['/getAllProducts']);
  });
}
}