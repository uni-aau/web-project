import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const baseURL = 'http://localhost:3000/api/stations'

@Injectable({
  providedIn: 'root'
})
export class BikeStationService {

  constructor(private http: HttpClient) {
  }

  getBikeStations(): Observable<any> {
    return this.http.get(`${baseURL}/`, {});
  }

  getFreeParkingPlace(stationId: string, categoryId: string): Observable<any> {
    return this.http.get(`${baseURL}/free-spot/?categoryId=${categoryId}&stationId=${stationId}`, {});
  }

  deleteBikeStation(stationId: number): Observable<any> {
    return this.http.delete(`${baseURL}/station/${stationId}`)
  }

  checkBikeStatus(stationId: number): Observable<any> {
    return this.http.get(`${baseURL}/station/${stationId}/bike-status`)
  }

  updateStation(stationId: number, stationName: string, stationDescription: string, stationAddress: string, longitude: any, latitude: any, imageLink: string): Observable<any> {
    return this.http.put(`${baseURL}/station/${stationId}`, {stationName: stationName, description: stationDescription, stationAddress: stationAddress, longitude: longitude, latitude: latitude, stationImageLocation: imageLink })
  }

  createStation(stationName: string, stationDescription: string, stationAddress: string, longitude: any, latitude: any, imageLink: string): Observable<any> {
    return this.http.post(`${baseURL}/station`, {stationName: stationName, description: stationDescription, stationAddress: stationAddress, longitude: longitude, latitude: latitude, stationImageLocation: imageLink })
  }

}
