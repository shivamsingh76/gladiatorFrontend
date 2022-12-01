import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Category/Category';
import { Product } from '../Product/Product';

@Injectable({
  providedIn: 'root'
})
export class CategotyService {
  getProdBycat(categoryId: number) {
    throw new Error('Method not implemented.');
  }

  baseUrl:string="http://localhost:8282/category";

  constructor(private httpService:HttpClient) { }
  
  public getAllCategory() {
    console.log(this.httpService.get<Category[]>(this.baseUrl));
    return this.httpService.get<Category[]>(this.baseUrl+'/Category'); 

  }
  public prodByCat(id:number)
  {
    console.log(this.httpService.get<Product[]>(this.baseUrl+'/ProdByCategory/'+id));
    return this.httpService.get<Product[]>(this.baseUrl+'/ProdByCategory/'+id);
  }
  
}
