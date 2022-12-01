import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowallproductsComponent } from './Products/showallproducts/showallproducts.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductbynameComponent } from './Products/productbyname/productbyname.component';
const routes: Routes = [
  {path:'products',component:ShowallproductsComponent},
  {path:'productsbyname',component:ProductbynameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
