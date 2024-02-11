import { Component, Input } from '@angular/core'

@Component({
  selector: 'book-ticket-popup-component',
  templateUrl: 'book-ticket-popup-component.component.html',
  styleUrls: ['book-ticket-popup-component.component.css'],
})
export class BookTicketPopupComponent {
  @Input()
  bookTicketPopupNewWalletAmount: string = 'New Wallet Amount: {0}'
  @Input()
  bookTicketPopupTitle: string = 'Book Ticket'
  @Input()
  bookTicketPopupSubtitleBookingInfo: string = 'Booking Information'
  @Input()
  bookTicketPopupTotalPrice: string = 'Total Price: {0}'
  @Input()
  bookTicketPopupName: string = 'Name: {0}'
  @Input()
  bookTicketPopupButtonDiscard: string = 'Discard'
  @Input()
  bookTicketPopupButtonBook: string = 'Book Ticket'
  @Input()
  bookTicketPopupCategory: string = 'Category: {0}'
  @Input()
  bookTicketPopupSubtitleRentingInfo: string = 'Renting Information'
  constructor() {}
}
