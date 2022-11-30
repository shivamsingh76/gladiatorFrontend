import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login } from '../Login/login';
import { Retailer } from '../Retailer/Retailer';



@Injectable({
  providedIn: 'root'
})
export class RetailerService {


  baseUrl:string="http://localhost:8282/retailers";



  constructor(private httpService:HttpClient) { }


  public doRetailerLogin(login:login):Observable<any> {
    
    return this.httpService.get<Retailer>(this.baseUrl+'/login/'+login.email+"/"+login.password);

  }




  // public getMyProduct(){

  //   return this.httpService.get<Product[]>(this.baseUrl+'/myproducts/'+retailer.retailerId);

  // }

  // public createUpdateRequest(){
  //   return this.httpService.post<boolean>(this.baseUrl+'/updaterequest/'+product.productId);
  // }


}
