import {Component, Inject, Input} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LanguageHandler} from "../../handler/LanguageHandler";

@Component({
  selector: 'booking-rent-bike-start-confirmation-popup-component',
  templateUrl:
    'booking-rent-bike-start-confirmation-popup-component.component.html',
  styleUrls: [
    'booking-rent-bike-start-confirmation-popup-component.component.css',
  ],
})
export class BookingRentBikeStartConfirmationPopupComponent {
  @Input()
  bookingRentBikeStartConfirmationTitle: string = 'Start renting?'
  @Input()
  bookingRentBikeStartConfirmationBookedType: string = 'Booked Type: {0}'
  @Input()
  bookingRentBikeStartConfirmationSelectedBike: string = 'Selected Bike: {0}'
  @Input()
  bookingRentBikeStartConfirmationTicketID: string = 'Ticket ID: {0}'
  @Input()
  bookingRentBikeStartConfirmationParkingPlace: string = 'Parking Place: {0}'
  @Input()
  bookingRentBikeStartConfirmationRentingTime: string =
    'Renting Time: {0} ({1})'
  @Input()
  bookingRentBikeStartConfirmationHint: string =
    'After starting the bike rental, you will find further information in the Active Rentals menu'

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<BookingRentBikeStartConfirmationPopupComponent>,) {
    if (data) {
      this.fillInputs();
    }
  }

  performConfirm($event: void) {
    this.dialogRef.close({success: true});
  }

  performCancel($event: void) {
    this.dialogRef.close({success: false});
  }

  private fillInputs() {
    console.log(this.data)
    this.bookingRentBikeStartConfirmationSelectedBike = LanguageHandler.formatString(
      'Selected Bike: {0}', [this.data.bikeName]);
    this.bookingRentBikeStartConfirmationBookedType = LanguageHandler.formatString(
      'Booked Type: {0}', [this.data.bookedType]);
    this.bookingRentBikeStartConfirmationRentingTime = LanguageHandler.formatString(
      'Renting Time: {0} ', [this.data.rentingTime]);
    this.bookingRentBikeStartConfirmationTicketID = LanguageHandler.formatString(
      'Ticket ID: {0}', [this.data.ticketId]);
    this.bookingRentBikeStartConfirmationParkingPlace = LanguageHandler.formatString(
      'Parking Place: {0}', [this.data.parkingPlace]);
  }
}
