import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BikeStationService {

  constructor(private http: HttpClient) { }

  getBikeStations(): Observable<any> {
    return this.http.get('http://localhost:3000/api/stations', {});
  }

/*  getParkingPlace(): Observable<any> {

  }*/

}
