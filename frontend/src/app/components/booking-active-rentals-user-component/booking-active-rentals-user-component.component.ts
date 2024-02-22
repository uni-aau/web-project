import {Component, Input} from '@angular/core'
import {TicketService} from "../../services/ticket.service";

@Component({
  selector: 'booking-active-rentals-user-component',
  templateUrl: 'booking-active-rentals-user-component.component.html',
  styleUrls: ['booking-active-rentals-user-component.component.css'],
})
export class BookingActiveRentalsUserComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  bookingActiveRentalsTitle: string = 'Your Active Rentals'

  rentals: any[] = [];

  constructor(private ticketService: TicketService) {
    this.rentals = [];
    this.fetchRentals();
  }

  fetchRentals() {
    this.ticketService.selectRentedTickets().subscribe({
      next: (val) => this.rentals = val,
      error: (err) => {
        if (err.status === 404) this.rentals = [];
        else console.log("Error while fetching rentals: ", err)
      }
    })

  }

  handleReturnBike() {
    this.fetchRentals();
  }
}
