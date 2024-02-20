import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseURL = "http://localhost:3000/api/bikes"

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  deleteBike(bikeId: number): Observable<any> {
      return this.http.delete(`${baseURL}/bike/${bikeId}`);
  }

  fetchBikes(): Observable<any> {
    return this.http.get(`${baseURL}/`)
  }
}
