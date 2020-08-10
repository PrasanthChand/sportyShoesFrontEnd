import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['../app.component.css']
})
export class GetAllProductsComponent implements OnInit {
  public product: Product;
  public products: Product[];
  constructor(private service: ProductService, private cartService: CartService,private route: ActivatedRoute) { }


  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    this.service.getAllProducts().subscribe(res => {
      this.products = res;
    });
  }
}
