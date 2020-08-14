import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase';
import { PurchaseService } from '../purchase.service';
import {Product} from '../product';
import {ProductService} from '../product.service';
import { User } from '../user';

@Component({
  selector: 'app-get-all-purchases',
  templateUrl: './get-all-purchases.component.html',
  styleUrls: ['../app.component.css']
})
export class GetAllPurchasesComponent implements OnInit {
public product:Product;
// public user:User;
// public users:User[];
public purchases: Purchase[];
  constructor(private service: PurchaseService) { }

  ngOnInit() {
    this.service.getAllPurchases().subscribe(res=>{
      this.purchases=res;
    });
  }

}