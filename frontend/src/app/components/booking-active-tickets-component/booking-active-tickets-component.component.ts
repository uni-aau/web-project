import { Component, Input } from '@angular/core'
import {TicketService} from "../../services/ticket.service";
import {tick} from "@angular/core/testing";

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
  tickets:any;
  constructor(private ticketService:TicketService) {}

  ngOnInit() {
    this.ticketService.fetchTickets().subscribe((res)=> {
      this.tickets = res.filter((ticket:any)=> {
        console.log(ticket)
        return ticket.user_id === Number(localStorage.getItem("user_id"))
      });
      console.log(this.tickets)
    });


  }
}
