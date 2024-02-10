import { Component, Input } from '@angular/core'

@Component({
  selector: 'book-ticket-booking-information-component',
  templateUrl: 'book-ticket-booking-information-component.component.html',
  styleUrls: ['book-ticket-booking-information-component.component.css'],
})
export class BookTicketBookingInformationComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  text2: string = 'Immediate Booking?'
  @Input()
  textinputPlaceholder22: string = 'placeholder'
  @Input()
  text12: string = 'Select Booking Time'
  constructor() {}
}
