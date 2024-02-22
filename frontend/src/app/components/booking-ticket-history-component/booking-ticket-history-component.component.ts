import { Component, Input } from '@angular/core'
import {TicketService} from "../../services/ticket.service";

@Component({
  selector: 'booking-ticket-history-component',
  templateUrl: 'booking-ticket-history-component.component.html',
  styleUrls: ['booking-ticket-history-component.component.css'],
})
export class BookingTicketHistoryComponent {
  @Input()
  bookingHistoryTitle: string = 'Booking History'
  @Input()
  rootClassName: string = ''
  @Input()
  tickets:any;
  constructor(private ticketService:TicketService) {}

  ngOnInit() {
    this.ticketService.fetchTickets().subscribe((res)=> {
      this.tickets = res.filter((ticket:any)=> {
        console.log(ticket)
        return ticket.user_id === Number(localStorage.getItem("user_id")) &&
          ticket.status === "Completed"
      });
      console.log(this.tickets)
    });


  }
}
