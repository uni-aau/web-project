import { Component, Input } from '@angular/core'

@Component({
  selector: 'booking-ticket-history-entry-component',
  templateUrl: 'booking-ticket-history-entry-component.component.html',
  styleUrls: ['booking-ticket-history-entry-component.component.css'],
})
export class BookingTicketHistoryEntryComponent {
  @Input()
  bookingHistoryEntryRentedBike: string = 'Rented Bike: {0}'
  @Input()
  bookingHistoryEntryStatus: string = 'Status: {0}'
  @Input()
  bookingHistoryEntryRentingInformation: string =
    'Booked at: {0} | Rented  at: %s | Renting Time: {1}'
  @Input()
  bookingHistoryEntryTitle: string = '{0} (Price: {1})'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
