import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ShowAllCategoryComponent } from './Category/show-all-category/show-all-category.component';
import { UserLoginComponent } from './Login/user-login/user-login.component';
import { UserRegisterComponent } from './Register/user-register/user-register.component';
import { AppRoutingModule } from './app-routing.module';
import { UserLoginComponent } from './Login/user-login/user-login.component';
import { UserRegisterComponent } from './Register/user-register/user-register.component';
import { HttpClientModule } from '@angular/common/http'; // add this import
import { AppComponent } from './app.component';
import { RetailerloginComponent } from './Login/retailerlogin/retailerlogin.component';
import { OrderComponent } from './Order/order.component';
import { RetailerComponent } from './Retailer/retailer.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { AdminLoginComponent } from './Login/admin-login/admin-login.component';
import { AddRetailerComponent } from './Admin/add-retailer/add-retailer.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { MyproductsComponent } from './Retailer/myproducts/myproducts.component';
import { CreateUpdateRequestComponent } from './Retailer/create-update-request/create-update-request.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
    ShowallproductsComponent,
    ProductbynameComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,

    FormsModule,

    ReactiveFormsModule,

    HttpClientModule
    ShowAllCategoryComponent,
    UserLoginComponent,
    UserRegisterComponent,
    RetailerloginComponent,
    RetailerComponent,
    OrderComponent,
    AdminLoginComponent,
    AddRetailerComponent,
    AddProductComponent,
    MyproductsComponent,
    CreateUpdateRequestComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
