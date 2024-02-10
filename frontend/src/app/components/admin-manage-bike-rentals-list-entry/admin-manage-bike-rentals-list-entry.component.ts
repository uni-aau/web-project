import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-manage-bike-rentals-list-entry',
  templateUrl: 'admin-manage-bike-rentals-list-entry.component.html',
  styleUrls: ['admin-manage-bike-rentals-list-entry.component.css'],
})
export class AdminManageBikeRentalsListEntry {
  @Input()
  bookedTypeEntryRentingInformation: string =
    'Rent Start: %s | Renting Time: %s'
  @Input()
  rootClassName: string = ''
  @Input()
  bookedTypeEntryBookingDate: string = 'Booked at: %s'
  @Input()
  bookedTypeEntryStatus: string =
    'Status: %s (Booked|Rented|Overdue since: %s|Canceled|Not Taken (-10% Fee))'
  @Input()
  bookedTypeEntryBookedType: string = 'Booked Type: %s (Category|Bike|Model)'
  @Input()
  bookedTypeEntryDueDate: string = 'Due Date: %s'
  @Input()
  bookedTypeEntryTitle: string = '%s (Price: %s)'
  @Input()
  manageBikeRentalsRentedBy: string = 'Rented by: %s'
  @Input()
  text1: string = 'TicketID: %s'
  constructor() {}
}
