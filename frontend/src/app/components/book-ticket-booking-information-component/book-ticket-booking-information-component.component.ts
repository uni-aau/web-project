import {Component, Input} from '@angular/core'

@Component({
  selector: 'book-ticket-booking-information-component',
  templateUrl: 'book-ticket-booking-information-component.component.html',
  styleUrls: ['book-ticket-booking-information-component.component.css'],
})
export class BookTicketBookingInformationComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  bookTicketBookingInformationImmediateBooking: string = 'Immediate Booking?'
  @Input()
  bookTicketBookingInformationInputPlaceholderBookingTime: string =
    'placeholder'
  @Input()
  bookTicketBookingInformationLabelBookingTime: string = 'Select Booking Time'

  constructor() {
  }
}
