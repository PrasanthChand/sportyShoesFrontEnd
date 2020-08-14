import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Purchase } from '../purchase';
import { Router } from '@angular/router';
import { PurchaseService} from '../purchase.service';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../app.component.css']
})
export class CartComponent implements OnInit {
 items;
 public product: Product;
 public purchase: Purchase;
  constructor(private productservice:ProductService,private purchaseservice:PurchaseService, private router:Router, private cartService: CartService
  ) { 
    
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
   
createPurchase(){
  this.purchaseservice.createPurchase(this.items).subscribe(data=>{
    this.purchase = new Purchase();
    this.router.navigate(['/getAllPurchases']);
    window.alert('Your purchased Products will be delivered to your address shortly, Thanks for purchasing!');
  });
}

}
