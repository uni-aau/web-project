import { Component, Input } from '@angular/core'

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
  constructor() {}
}
