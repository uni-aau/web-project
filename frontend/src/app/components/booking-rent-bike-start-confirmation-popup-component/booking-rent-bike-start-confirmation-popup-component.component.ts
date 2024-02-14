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
  bookingRentBikeStartConfirmationTitle: string = 'Start renting?'
  @Input()
  bookingRentBikeStartConfirmationBookedType: string = 'Booked Type: {0}'
  @Input()
  bookingRentBikeStartConfirmationSelectedBike: string = 'Selected Bike: {0}'
  @Input()
  bookingRentBikeStartConfirmationTicketID: string = 'Ticket ID: {0}'
  @Input()
  bookingRentBikeStartConfirmationParkingPlace: string = 'Parking Place: {0}'
  @Input()
  bookingRentBikeStartConfirmationRentingTime: string =
    'Renting Time: {0} ({1})'
  @Input()
  bookingRentBikeStartConfirmationHint: string =
    'After starting the bike rental, you will find further information in the Active Rentals menu'
  constructor() {}
}
