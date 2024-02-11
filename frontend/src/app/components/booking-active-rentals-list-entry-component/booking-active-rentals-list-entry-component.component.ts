import { Component, Input } from '@angular/core'

@Component({
  selector: 'booking-active-rentals-list-entry-component',
  templateUrl: 'booking-active-rentals-list-entry-component.component.html',
  styleUrls: ['booking-active-rentals-list-entry-component.component.css'],
})
export class BookingActiveRentalsListEntryComponent {
  @Input()
  bookingActiveRentalsEntryImage: string = '/assets/no-image.svg'
  @Input()
  bookingActiveRentalsEntryRentingInformation: string =
    'Renting Time: {0} | Due Date: {1}'
  @Input()
  bookingActiveRentalsEntryLocationInformation: string =
    'Bike Station: {0} | Parking Place: {1}'
  @Input()
  rootClassName: string = ''
  @Input()
  bookingActiveRentalsEntrySelectedBike: string = 'Selected Bike: {0}'
  @Input()
  bookingActiveRentalsEntryImageAlt: string = 'image'
  @Input()
  bookingActiveRentalsEntryType: string = 'Booked Type: {0}'
  @Input()
  bookingActiveRentalsEntryStatus: string = 'Status: {0}'
  constructor() {}
}
