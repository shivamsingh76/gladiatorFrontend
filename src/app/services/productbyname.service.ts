import { Injectable } from '@angular/core';
import { Productbyname } from '../Products/productbyname/Productbyname';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductbynameService {
  baseUrl:string="http://localhost:8282/products"
  constructor(private httpService:HttpClient) { }
  public findByName(pname:string)
  {
    console.log(this.httpService.get<Productbyname[]>(this.baseUrl));
    return this.httpService.get<Productbyname[]>(this.baseUrl+"/productsbyname/"+pname);
  }
}
