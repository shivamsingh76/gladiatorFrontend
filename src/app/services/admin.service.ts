import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Login/Login';
import { Admin } from '../Admin/Admin';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl:string="http://localhost:8282/admins";

  //crud
  constructor(private httpService:HttpClient) { }

  public doAdminLogin(login:Login):Observable<any> {
    

    return this.httpService.get<Admin>(this.baseUrl+'/login/'+login.email+"/"+login.password);
  }
}
