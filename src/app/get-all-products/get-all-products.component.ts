import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['../app.component.css']
})
export class GetAllProductsComponent implements OnInit {

  public products: Product[];
  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getAllProducts().subscribe(res=>{
      this.products=res;
    });
  }

}
