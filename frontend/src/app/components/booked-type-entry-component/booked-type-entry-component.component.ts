import { Component, Input } from '@angular/core'

@Component({
  selector: 'booked-type-entry-component',
  templateUrl: 'booked-type-entry-component.component.html',
  styleUrls: ['booked-type-entry-component.component.css'],
})
export class BookedTypeEntryComponent {
  @Input()
  bookedTypeEntryTicketId: string = 'TicketID: %s'
  @Input()
  bookedTypeEntryRentingInformation: string =
    'Rent Start: %s | Renting Time: %s'
  @Input()
  bookedTypeEntryBookingDate: string = 'Booked at: %s'
  @Input()
  bookedTypeEntryBookedType: string = 'Booked Type: %s (Category|Bike|Model)'
  @Input()
  rootClassName: string = ''
  @Input()
  bookedTypeEntryTitle: string = '%s (Price: %s)'
  @Input()
  bookedTypeEntryStatus: string =
    'Status: %s (Booked|Rented|Overdue since: %s|Canceled|Not Taken (-10% Fee))'
  @Input()
  bookedTypeEntryDueDate: string = 'Due Date: %s'
  constructor() {}
}
