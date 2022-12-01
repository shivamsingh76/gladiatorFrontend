import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Login } from '../Login/login';
import { User } from '../User/User';
import { Observable } from 'rxjs';
import { register } from '../Register/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string="http://localhost:8282/users";
  constructor(private httpService:HttpClient) { }


  public doAdminLogin(login:Login):Observable<any> {
    return this.httpService.get<User>(this.baseUrl+'/login/'+login.email+"/"+login.password);
  }

  public addProd(emp:register):Observable<any>
  {
    const headers = {'content-type': 'application/json'}
    console.log("inside service"+emp);
    return this.httpService.post(this.baseUrl+'/adduser/',JSON.stringify(emp),{'headers':headers});
  }
  //http://localhost:8282/users/adduser
}
