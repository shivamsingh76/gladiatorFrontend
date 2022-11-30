import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './Login/user-login/user-login.component';
import { UserRegisterComponent } from './Register/user-register/user-register.component';




@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
