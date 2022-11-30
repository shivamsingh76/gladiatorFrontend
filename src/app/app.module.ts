import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './Login/user-login/user-login.component';
import { UserRegisterComponent } from './Register/user-register/user-register.component';
import { HttpClientModule } from '@angular/common/http'; // add this import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetailerloginComponent } from './Login/retailerlogin/retailerlogin.component';
import { OrderComponent } from './Order/order.component';
import { RetailerComponent } from './Retailer/retailer.component';
import { AdminLoginComponent } from './Login/admin-login/admin-login.component';
import { AddRetailerComponent } from './Admin/add-retailer/add-retailer.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    RetailerloginComponent,
    RetailerComponent,
    OrderComponent,
    AdminLoginComponent,
    AddRetailerComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
