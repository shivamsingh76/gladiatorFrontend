import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../User/User';
import { Observable } from 'rxjs';
import { register } from '../Register/register';
import { Login } from '../Login/Login';
import { Order } from '../Order/Order';

@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {

  constructor() { }
}
