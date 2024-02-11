import { Component, Input } from '@angular/core'

@Component({
  selector: 'booked-type-entry-component',
  templateUrl: 'booked-type-entry-component.component.html',
  styleUrls: ['booked-type-entry-component.component.css'],
})
export class BookedTypeEntryComponent {
  @Input()
  bookedTypeEntryTicketId: string = 'TicketID: {0}'
  @Input()
  bookedTypeEntryRentingInformation: string =
    'Rent Start: {0} | Renting Time: {0}'
  @Input()
  bookedTypeEntryBookingDate: string = 'Booked at: {0}'
  @Input()
  bookedTypeEntryBookedType: string = 'Booked Type: {0} (Category|Bike|Model)'
  @Input()
  rootClassName: string = ''
  @Input()
  bookedTypeEntryTitle: string = '{0} (Price: {1})'
  @Input()
  bookedTypeEntryStatus: string =
    'Status: {0} (Booked|Rented|Overdue since: %s|Canceled|Not Taken (-10% Fee))'
  @Input()
  bookedTypeEntryDueDate: string = 'Due Date: {0}'
  constructor() {}
}
