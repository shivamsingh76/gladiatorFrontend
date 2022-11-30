import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // add this import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './Login/admin-login/admin-login.component';
import { AddRetailerComponent } from './Admin/add-retailer/add-retailer.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddRetailerComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
