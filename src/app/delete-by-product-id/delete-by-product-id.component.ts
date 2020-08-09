import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-delete-by-product-id',
  templateUrl: './delete-by-product-id.component.html',
  styleUrls: ['../app.component.css']
})
export class DeleteByProductIdComponent implements OnInit {

  constructor(private service: ProductService, private router: Router) {

  }

  public product: Product;
  public products: Product[]=[];
  public productId: number;

  deleteByProductId() {
    return this.service.deleteByProductId(this.productId).subscribe(data => {
      this.product = data;
      this.products.pop;
      this.router.navigate(['/getAllProducts']);
    })
  }

  ngOnInit() {
    this.service.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

}

