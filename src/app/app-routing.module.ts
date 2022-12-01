import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './Login/admin-login/admin-login.component';
import { RetailerloginComponent } from './Login/retailerlogin/retailerlogin.component';
import { UserLoginComponent } from './Login/user-login/user-login.component';
import { UserRegisterComponent } from './Register/user-register/user-register.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'userregister',
    component: UserRegisterComponent
  },
  {
    path: 'userlogin',
    component: UserLoginComponent
  },
  {
    path: 'retailerlogin',
    component: RetailerloginComponent
  },
  {
    path: 'adminLogin',
    component: AdminLoginComponent
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
