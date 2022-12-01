import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Category/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl:string="http://localhost:8282/category";

  constructor(private httpService:HttpClient) { }
  
  public getAllCategory() {
    console.log(this.httpService.get<Category[]>(this.baseUrl));
    return this.httpService.get<Category[]>(this.baseUrl+'/Category'); 

  

  
  }
}
