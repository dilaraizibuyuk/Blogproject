import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, DataResponseModel, Blog } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl = "http://test20.internative.net/"
  constructor(private httpClient: HttpClient) { }
  getCategories():Observable<DataResponseModel<Category[]>>{
    return this.httpClient.get<DataResponseModel<Category[]>>(this.apiUrl+"Blog/GetCategories");
  }
  getBlogs(categoryId:string=""):Observable<DataResponseModel<Blog[]>>{
    return this.httpClient.post<DataResponseModel<Blog[]>>(this.apiUrl+"Blog/GetBlogs",{CategoryId:categoryId});
  }
  toggleFavorite(id:string):Observable<DataResponseModel<Blog>>{
    return this.httpClient.post<DataResponseModel<Blog>>(this.apiUrl+"Blog/ToggleFavorite",{Id:id});
  }
}
