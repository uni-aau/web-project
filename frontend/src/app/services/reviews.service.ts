import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl = "http://localhost:3000/api/stationReviews";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) {
  }

  fetchStationReviews(stationId: number): Observable<any> {
    return this.http.get(`${baseUrl}/station/${stationId}`);
  }

  deleteStationReview(reviewId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/review/${reviewId}`);
  }

  deleteAllStationReviews(stationId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/review/station/${stationId}`);
  }

  addReview(stationId: number, rating: number, ratingTitle: string, ratingModel: number, ratingDescription: string): Observable<any> {
    return this.http.post(`${baseUrl}/review/station/${stationId}`, {
      rating: rating,
      title: ratingTitle,
      modelId: ratingModel,
      comment: ratingDescription
    });
  }
}
