import { Component, Input } from '@angular/core'

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
  constructor() {}
}
