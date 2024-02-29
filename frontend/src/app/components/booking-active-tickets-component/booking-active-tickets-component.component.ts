import {Component, Input} from '@angular/core'
import {TicketService} from "../../services/ticket.service";

@Component({
  selector: 'booking-active-tickets-component',
  templateUrl: 'booking-active-tickets-component.component.html',
  styleUrls: ['booking-active-tickets-component.component.css'],
})
export class BookingActiveTicketsComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  bookingActiveTicketsTitle: string = 'Active Tickets'
  @Input()
  tickets: any;

  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
    this.fetchActiveTickets();
  }

  fetchActiveTickets() {
    this.ticketService.fetchTickets().subscribe((res) => {
      this.tickets = res.filter((ticket: any) => {
        return ticket.user_id === Number(localStorage.getItem("user_id")) &&
          ticket.status !== "Completed"
      });
    });
  }

  updateData() {
    this.fetchActiveTickets();
  }

}
