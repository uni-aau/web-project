import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl = "http://localhost:3000/api/bikeModels";

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }

  getModels() : Observable<any> {
    return this.http.get(`${baseUrl}/`);
  }

}
