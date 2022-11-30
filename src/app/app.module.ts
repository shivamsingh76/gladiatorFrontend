import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetailerloginComponent } from './Login/retailerlogin/retailerlogin.component';
import { OrderComponent } from './Order/order.component';
import { RetailerComponent } from './Retailer/retailer.component';


@NgModule({
  declarations: [
    AppComponent,
    RetailerloginComponent,
    RetailerComponent,
    OrderComponent
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
