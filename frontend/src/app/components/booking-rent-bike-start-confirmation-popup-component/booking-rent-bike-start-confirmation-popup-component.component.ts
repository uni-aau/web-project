import { Component, Input } from '@angular/core'

@Component({
  selector: 'booking-rent-bike-start-confirmation-popup-component',
  templateUrl:
    'booking-rent-bike-start-confirmation-popup-component.component.html',
  styleUrls: [
    'booking-rent-bike-start-confirmation-popup-component.component.css',
  ],
})
export class BookingRentBikeStartConfirmationPopupComponent {
  @Input()
  text: string = 'Are you sure? TODO'
  @Input()
  adminAssignBikeBikeModel: string = 'Ticket ID: %s'
  @Input()
  adminAssignBikeBikeCategories: string = 'Booked Type: %s'
  @Input()
  adminAssignBikeBikeModel1: string = 'Bike Station: %s'
  @Input()
  adminAssignBikeBikeCategories1: string = 'Parking Place: %s'
  @Input()
  text1: string = 'Selected Bike: %s'
  constructor() {}
}
