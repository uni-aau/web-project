import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseURL = "http://localhost:3000/api/bikes"

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) {
  }

  deleteBike(bikeId: number): Observable<any> {
    return this.http.delete(`${baseURL}/bike/${bikeId}`);
  }

  unassignBike(bikeId: number) {
    console.log("unassign")
    return this.http.post(`${baseURL}/bike/${bikeId}/unasign`, {});
  }

  fetchBikes(): Observable<any> {
    return this.http.get(`${baseURL}/`)
  }

  getBike(bikeId: number) {
    return this.http.get(`${baseURL}/bike/${bikeId}`)
  }

  assignParkingSpot(stationId: number, spotNumber: number, bikeId: number): Observable<any> {
    return this.http.put(`${baseURL}/bike/${bikeId}/assign-spot`, {stationId: stationId, spotNumber: spotNumber});
  }

  updateBike(bikeId: number, bikeName: string, bikeSize: number, bikePrice: number, bikeStatus: string, bikeImage: string, modelId: number): Observable<any> {
    return this.http.put(`${baseURL}/bike/${bikeId}`, {
      bikeName: bikeName,
      modelId: modelId,
      status: bikeStatus,
      bikeImage: bikeImage,
      size: bikeSize,
      price: bikePrice
    });
  }

  addBike(bikeName: string, bikeSize: number, bikePrice: number, bikeStatus: string, bikeImage: string, modelId: number): Observable<any> {
    return this.http.post(`${baseURL}/bike`, {
      bikeName: bikeName,
      modelId: modelId,
      status: bikeStatus,
      bikeImage: bikeImage,
      size: bikeSize,
      price: bikePrice
    });
  }

  updateBikeStatus(bikeId: number, bikeStatus: string) {
    return this.http.put(`${baseURL}/bike/${bikeId}/status`, {bikeStatus: bikeStatus});
  }
}
