import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseURL = "http://localhost:3000/api/tickets"

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {
  }

  newTicket(value: number, bookType: string, bikeId: number | undefined, modelId: number | undefined, categoryId: number, statusBooking: string,
            bookingTime: any, rentingStart: any, rentingEnd: any, price: number) {

    return this.http.post(`${baseURL}/ticket`, {
      amount: value,
      userId: localStorage.getItem("user_id"),
      bookedType: bookType,
      bikeId: bikeId,
      modelId: modelId,
      categoryId: categoryId,
      status: statusBooking,
      bookingTime: bookingTime,
      rentingStart: rentingStart,
      rentingEnd: rentingEnd,
      price: price
    });
  }

  fetchTickets(): Observable<any> {
    return this.http.get(`${baseURL}/`)
  }

  selectRentedTickets(): Observable<any> {
    let userId = localStorage.getItem("user_id")
    return this.http.get(`${baseURL}/rented/${userId}`);
  }

  updateTicketStatus(ticketId: number, status: string): Observable<any> {
    return this.http.put(`${baseURL}/ticket/${ticketId}/status`, {status: status});
  }

}
