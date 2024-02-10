import { Component, Input } from '@angular/core'

@Component({
  selector: 'booking-ticket-history-entry-component',
  templateUrl: 'booking-ticket-history-entry-component.component.html',
  styleUrls: ['booking-ticket-history-entry-component.component.css'],
})
export class BookingTicketHistoryEntryComponent {
  @Input()
  bookingHistoryEntryRentedBike: string = 'Rented Bike: %s'
  @Input()
  bookingHistoryEntryStatus: string = 'Status: %s'
  @Input()
  bookingHistoryEntryRentingInformation: string =
    'Booked at: %s | Rented  at: %s | Renting Time: %s'
  @Input()
  bookingHistoryEntryTitle: string = '%s (Price: %s)'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
