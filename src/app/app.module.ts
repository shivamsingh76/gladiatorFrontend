
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShowAllCategoryComponent } from './Category/show-all-category/show-all-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // add this import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetailerloginComponent } from './Login/retailerlogin/retailerlogin.component';
import { OrderComponent } from './Order/order.component';
import { RetailerComponent } from './Retailer/retailer.component';
import { AdminLoginComponent } from './Login/admin-login/admin-login.component';
import { AddRetailerComponent } from './Admin/add-retailer/add-retailer.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { UserLoginComponent } from './Login/user-login/user-login.component';
import { UserRegisterComponent } from './Register/user-register/user-register.component';
import { ShowAllOrdersComponent } from './User/show-all-orders/show-all-orders.component';
import { HomeComponent } from './home/home.component';


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
    ShowAllOrdersComponent,
    HomeComponent

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
