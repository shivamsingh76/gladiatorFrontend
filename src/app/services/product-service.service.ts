import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Products/showallproducts/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  baseUrl:string="http://localhost:8282/products"
  constructor(private httpService:HttpClient) { }

  public getAllProducts()
  {
    console.log(this.httpService.get<Product[]>(this.baseUrl));

    return this.httpService.get<Product[]>(this.baseUrl+"/allproducts");
  }
}
