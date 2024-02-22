import { Component, Input } from '@angular/core'
import {LanguageHandler} from "../../handler/LanguageHandler";

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
  @Input()
  ticketData:any
  constructor() {}

  ngOnInit() {
    this.insertData();
    console.log(this.ticketDatax)
  }

  private insertData() {
    this.bookingHistoryEntryTitle = LanguageHandler.formatString(
      "{0} (Price: {1})", [this.ticketData.category_name, this.ticketData.price]);
    this.bookingHistoryEntryRentingInformation = LanguageHandler.formatString(
      "Booked at: {0} | Rented  at: %s | Renting Time: {1}", [this.ticketData.renting_start, this.ticketData.renting_end]);
    this.bookingHistoryEntryStatus = LanguageHandler.formatString(
      "Status: {0}", [this.ticketData.status]);
    this.bookingHistoryEntryRentedBike = LanguageHandler.formatString(
      "Rented Bike: {0}", [this.ticketData.booked_type]);

  }
}
