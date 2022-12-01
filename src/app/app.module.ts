import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowAllCategoryComponent } from './Category/show-all-category/show-all-category.component';

import { UserLoginComponent } from './Login/user-login/user-login.component';
import { UserRegisterComponent } from './Register/user-register/user-register.component';

import { RetailerloginComponent } from './Login/retailerlogin/retailerlogin.component';
import { OrderComponent } from './Order/order.component';
import { RetailerComponent } from './Retailer/retailer.component';
import { AdminLoginComponent } from './Login/admin-login/admin-login.component';
import { AddRetailerComponent } from './Admin/add-retailer/add-retailer.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { GetProdBycatComponent } from './Category/get-prod-bycat/get-prod-bycat.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowAllCategoryComponent,
    UserLoginComponent,
    UserRegisterComponent,
    RetailerloginComponent,
    RetailerComponent,
    OrderComponent,
    AdminLoginComponent,
    AddRetailerComponent,
    AddProductComponent,
    GetProdBycatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
