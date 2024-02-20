import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const baseURL = 'http://localhost:3000/api/stations'

@Injectable({
  providedIn: 'root'
})
export class BikeStationService {

  constructor(private http: HttpClient) { }

  getBikeStations(): Observable<any> {
    return this.http.get(`${baseURL}/`, {});
  }

  getFreeParkingPlace(stationId: string, categoryId: string): Observable<any> {
    return this.http.get(`${baseURL}/free-spot/?categoryId=${categoryId}&stationId=${stationId}`,{});
  }

}
