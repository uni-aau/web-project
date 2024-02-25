import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseURL = 'http://localhost:3000/api/parkingSpots'

@Injectable({
    providedIn: 'root'
})
export class ParkingspotService {

    constructor(private http: HttpClient) {
    }

    fetchParkingSpots(stationId: number): Observable<any> {
        return this.http.get(`${baseURL}/${stationId}`)
    }

    fetchAssignedBike(spotId: number): Observable<any> {
        return this.http.get(`${baseURL}/spot/${spotId}/assigned-bikes`);
    }

    updateParkingSpot(spotId: number, newCategoryIds: number[]): Observable<any> {
        return this.http.put(`${baseURL}/spot/${spotId}`, {newCategoryIds: newCategoryIds});
    }

    deleteParkingSpot(spotId: number) {
        return this.http.delete(`${baseURL}/spot/${spotId}`);
    }

    deleteParkingSpotWithBikeId(spotId: number, bikeId: number) {
        return this.http.delete(`${baseURL}/spot/${spotId}/${bikeId}`);
    }

    createParkingSpot(stationId: number, spotNumber: number, categoryIds: number[]) {
        return this.http.post(`${baseURL}/spot`, {stationId: stationId, spotNumber: spotNumber, categoryIds: categoryIds});
    }
}
