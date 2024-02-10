import { Component, Input } from '@angular/core'

@Component({
  selector: 'booking-manage-tickets-user',
  templateUrl: 'booking-manage-tickets-user.component.html',
  styleUrls: ['booking-manage-tickets-user.component.css'],
})
export class BookingManageTicketsUser {
  @Input()
  rootClassName: string = ''
  @Input()
  bookingManageTicketsTitle: string = 'Manage Tickets'
  constructor() {}
}
