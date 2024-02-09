import { Component, Input } from '@angular/core'

@Component({
  selector: 'booking-component',
  templateUrl: 'booking-component.component.html',
  styleUrls: ['booking-component.component.css'],
})
export class BookingComponent {
  @Input()
  bookingSearchLabel: string = 'Location: %s | Station: %s'
  @Input()
  bookingCategoriesTitle: string = 'Categories'
  @Input()
  bookingBikesTitle: string = 'Bikes'
  @Input()
  bookingModelsTitle: string = 'Models'
  @Input()
  bookingTitle: string = 'Booking'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
