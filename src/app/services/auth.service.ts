import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseModel, Login,Register,TokenModel } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="http://test20.internative.net/"
  constructor(private httpClient:HttpClient) { }
  singIn(login:Login): Observable<DataResponseModel<TokenModel>>{
    return this.httpClient.post<DataResponseModel<TokenModel>>(this.apiUrl+"Login/SignIn",login);
  }
  singUp(register:Register): Observable<DataResponseModel<TokenModel>>{
    return this.httpClient.post<DataResponseModel<TokenModel>>(this.apiUrl+"Login/SignUp",register);
  }
}
