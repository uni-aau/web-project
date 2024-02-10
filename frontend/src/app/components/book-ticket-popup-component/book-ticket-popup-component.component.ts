import { Component, Input } from '@angular/core'

@Component({
  selector: 'book-ticket-popup-component',
  templateUrl: 'book-ticket-popup-component.component.html',
  styleUrls: ['book-ticket-popup-component.component.css'],
})
export class BookTicketPopupComponent {
  @Input()
  text8: string = 'New Wallet Amount: %s'
  @Input()
  text1: string =
    'Warning: Using the bike longer than rented results in a penalty!'
  @Input()
  text: string = 'Book Ticket'
  @Input()
  text5: string = 'Booking Information'
  @Input()
  text6: string = 'Total Price: %s'
  @Input()
  text4: string = 'Name: %s'
  @Input()
  button1: string = 'Discard'
  @Input()
  button: string = 'Book Ticket'
  @Input()
  text3: string = 'Category: %s'
  @Input()
  text7: string = 'Renting Information'
  constructor() {}
}
