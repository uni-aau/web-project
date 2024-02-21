import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl = "http://localhost:3000/api/bikeCategory";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories() : Observable<any> {
    return this.http.get(`${baseUrl}/`);
  }

  deleteCategory(categoryId: number) : Observable<any> {
    return this.http.delete(`${baseUrl}/category/${categoryId}`);
  }

  updateCategory(categoryId: number, categoryName: string, categoryPrice: number) : Observable<any> {
    return this.http.put(`${baseUrl}/category/${categoryId}`, {categoryId: categoryId, categoryName: categoryName, price: categoryPrice});
  }

}
