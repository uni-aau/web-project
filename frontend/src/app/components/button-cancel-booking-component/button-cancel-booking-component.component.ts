import { Component, Input } from '@angular/core'

@Component({
  selector: 'button-cancel-booking-component',
  templateUrl: 'button-cancel-booking-component.component.html',
  styleUrls: ['button-cancel-booking-component.component.css'],
})
export class ButtonCancelBookingComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  cancelBookingButton: string = 'Cancel Booking'
  constructor() {}
}
