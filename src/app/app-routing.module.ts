import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { FindByUserIdComponent } from './find-by-user-id/find-by-user-id.component';
import { DeleteByUserIdComponent } from './delete-by-user-id/delete-by-user-id.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteByProductIdComponent } from './delete-by-product-id/delete-by-product-id.component';
import { FindByProductCategoryComponent } from './find-by-product-category/find-by-product-category.component';
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FindByProductIdComponent } from './find-by-product-id/find-by-product-id.component';
import { CartComponent } from './cart/cart.component';
import { CreatePurchaseComponent } from './create-purchase/create-purchase.component';
import { GetAllPurchasesComponent } from './get-all-purchases/get-all-purchases.component';
import { FindByPurchaseIdComponent } from './find-by-purchase-id/find-by-purchase-id.component';
import { FindByPurchaseDateComponent } from './find-by-purchase-date/find-by-purchase-date.component';


const routes: Routes = [
  {path:"createUser", component:CreateUserComponent},
  {path:"getAllUsers", component:GetAllUsersComponent},
  {path:"findByUserId", component:FindByUserIdComponent},
  {path:"deleteByUserId",component:DeleteByUserIdComponent},
  {path:"updateUser", component:UpdateUserComponent},
  {path:"createProduct", component:CreateProductComponent},
  {path:"deleteByProductId", component:DeleteByProductIdComponent},
  {path:"findByProductId", component: FindByProductIdComponent},
  {path:"findByProductCategory", component:FindByProductCategoryComponent},
  {path:"getAllProducts", component: GetAllProductsComponent},
  {path:"updateProduct", component:UpdateProductComponent},
  {path:"cart", component:CartComponent},
  {path:"createPurchase", component:CreatePurchaseComponent},
  {path:"getAllPurchases", component:GetAllPurchasesComponent},
  {path:"findByPurchaseId",component:FindByPurchaseIdComponent},
  {path:"findByPurchaseDate", component:FindByPurchaseDateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
