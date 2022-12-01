import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Admin/Admin';
import { Observable } from 'rxjs/internal/Observable';
import { Retailer } from '../Retailer/Retailer';
import { Login } from '../Login/Login';
import { Product } from '../Product/Product';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl: string = 'http://localhost:8282/admins';

  //crud
  constructor(private httpService: HttpClient) {}

  public doAdminLogin(login: Login): Observable<any> {
    return this.httpService.get<Admin>(
      this.baseUrl + '/login/' + login.email + '/' + login.password
    );
  }

  public registerRetailer(retailer: Retailer): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    return this.httpService.post(this.baseUrl + '/retailer', JSON.stringify(retailer), {
      headers: headers,
    });
  }

  public getAllRetailers() {
    return this.httpService.get<Retailer[]>(this.baseUrl + '/retailers');
  }

  public addProduct(product: Product)  {
    console.log(product);
    const headers = { 'content-type': 'application/json' };
     return this.httpService.post(this.baseUrl + '/product', JSON.stringify(product), {
       headers: headers,
     });
  }

}
