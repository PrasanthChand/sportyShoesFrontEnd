import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateUserComponent } from './create-user/create-user.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { UserService } from './user.service';
import { DeleteByUserIdComponent } from './delete-by-user-id/delete-by-user-id.component';
import { FindByUserIdComponent } from './find-by-user-id/find-by-user-id.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';
import { DeleteByProductIdComponent } from './delete-by-product-id/delete-by-product-id.component';
import { FindByProductIdComponent } from './find-by-product-id/find-by-product-id.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FindByProductCategoryComponent } from './find-by-product-category/find-by-product-category.component';
import { CartComponent } from './cart/cart.component';
import { CreatePurchaseComponent } from './create-purchase/create-purchase.component';
import { GetAllPurchasesComponent } from './get-all-purchases/get-all-purchases.component';
import { FindByPurchaseIdComponent } from './find-by-purchase-id/find-by-purchase-id.component';
import { FindByPurchaseDateComponent } from './find-by-purchase-date/find-by-purchase-date.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    GetAllUsersComponent,
    DeleteByUserIdComponent,
    FindByUserIdComponent,
    UpdateUserComponent,
    CreateProductComponent,
    GetAllProductsComponent,
    DeleteByProductIdComponent,
    FindByProductIdComponent,
    UpdateProductComponent,
    FindByProductCategoryComponent,
    CartComponent,
    CreatePurchaseComponent,
    GetAllPurchasesComponent,
    FindByPurchaseIdComponent,
    FindByPurchaseDateComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
