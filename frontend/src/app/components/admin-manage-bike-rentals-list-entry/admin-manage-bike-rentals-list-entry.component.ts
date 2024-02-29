import {Component, Input} from '@angular/core'

@Component({
  selector: 'admin-manage-bike-rentals-list-entry',
  templateUrl: 'admin-manage-bike-rentals-list-entry.component.html',
  styleUrls: ['admin-manage-bike-rentals-list-entry.component.css'],
})
export class AdminManageBikeRentalsListEntry {
  @Input()
  adminManageBikeRentalsRentingInformation: string =
    'Rent Start: {0} | Renting Time: {1}'
  @Input()
  rootClassName: string = ''
  @Input()
  adminManageBikeRentalsBookDate: string = 'Booked at: {0}'
  @Input()
  adminManageBikeRentalsStatus: string =
    'Status: {0} (Booked|Rented|Overdue since: %s|Canceled|Not Taken (-10% Fee))'
  @Input()
  adminManageBikeRentalsBookedType: string =
    'Booked Type: {0} (Category|Bike|Model)'
  @Input()
  adminManageBikeRentalsDueDate: string = 'Due Date: {0}'
  @Input()
  adminManageBikeRentalsTitle: string = '{0} (Price: {1})'
  @Input()
  adminManageBikeRentalsRentedBy: string = 'Rented by: {0}'
  @Input()
  adminManageBikeRentalsTicketId: string = 'TicketID: {0}'

  constructor() {
  }
}
