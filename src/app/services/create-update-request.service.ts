import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateUpdateRequestService {


  private baseUrl="";

  

  constructor(private http:HttpClient) { }


  // public getProduct(id:number){

  //   return this.http.get<Product>(this.baseUrl+'/findproduct/'+productId);
  // }


}
