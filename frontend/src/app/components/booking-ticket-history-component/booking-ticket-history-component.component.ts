import { Component, Input } from '@angular/core'

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
  constructor() {}
}
