import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WalletService } from '../../services/wallet.service';
import { LanguageHandler } from '../../handler/LanguageHandler';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'book-ticket-popup-component',
  templateUrl: 'book-ticket-popup-component.component.html',
  styleUrls: ['book-ticket-popup-component.component.css'],
})
export class BookTicketPopupComponent {
  @Input() bookTicketPopupNewWalletAmount: string = 'New Wallet Amount: {0}';
  @Input() bookTicketPopupTitle: string = 'Book Ticket';
  @Input() bookTicketPopupSubtitleBookingInfo: string = 'Booking Information';
  @Input() bookTicketPopupTotalPrice: string = 'Total Price: {0}';
  @Input() bookTicketPopupName: string = 'Name: {0}';
  @Input() bookTicketPopupButtonDiscard: string = 'Discard';
  @Input() bookTicketPopupButtonBook: string = 'Book Ticket';
  @Input() bookTicketPopupCategory: string = 'Category: {0}';
  @Input() bookTicketPopupSubtitleRentingInfo: string = 'Renting Information';
  @Input() rootClassName: string = '';
  @Input() bookTicketBookingInformationLabelBookingTime: string = 'Select Booking Time';
  @Input() bookTicketBookingInformationInputPlaceholderBookingTime: string = 'placeholder';
  @Input() bookTicketBookingInformationImmediateBooking: string = 'Immediate Booking?';
  @Input() bookTicketLabelRentingInformation: string = 'Select Rent Date';
  @Input() bookTicketRentingInformationInputPlaceholderRentDate: string = 'placeholder';
  @Input() bookTicketRentingInformationLabelRentDuration: string = 'Select Rent Duration';
  @Input() bookTicketInputPlaceholderRentingInformation: string = 'placeholder';
  @Input() bookTicketCheckboxError: string = '';
  @Input() bookTicketBookingTimeError: string = '';
  @Input() bookTicketRentDateError: string = '';
  @Input() bookTicketRentDurationError: string = '';
  @Input() bookTicketWalletError: string = '';
  immediateBooking: boolean = true;
  bookingDate: any;
  bookingDuration: any;
  formattedBookingDate: string = ""; // Fügen Sie diese Zeile hinzu

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private walletService: WalletService,
    private ticketService: TicketService
  ) {
    if (data) {
      this.fillInputs();
    }
  }

  ngOnInit() {
    this.bookingDate = new Date();
    this.bookingDuration = "00:00";
    this.updateFormattedBookingDate();
  }

  private fillInputs() {
    this.bookTicketPopupName = LanguageHandler.formatString('Name: {0}', [this.data.bikeName]);
    this.bookTicketPopupCategory = LanguageHandler.formatString('Category: {0}', [this.data.category]);
    this.bookTicketPopupTotalPrice = LanguageHandler.formatString('Total Price: {0}', [this.data.price]);

    this.walletService.fetchWalletBalance().subscribe((data) => {
      console.log(data[0].available_balance);
      this.bookTicketPopupNewWalletAmount = LanguageHandler.formatString('New Wallet Balance: {0}', [
        String(data[0].available_balance - this.data.price),
      ]);
    });
  }

  performBook() {
    console.log("book")
    let status = this.immediateBooking ? 'Booked' : 'Reservated';
    if (!this.immediateBooking) {
      this.updateFormattedBookingDate();
    }

    let endDate = this.addTimeToDate(this.bookingDate, this.bookingDuration);
    const formattedEndDate = this.formatDateForInput(endDate);

    this.ticketService.newTicket(
      this.data.price,
      'Bike',
      this.data.bikeId,
      this.data.modelId,
      this.data.categoryId,
      status,
      this.formattedBookingDate,
      this.formattedBookingDate,
      formattedEndDate
    );

    console.log("book end")
  }
  addTimeToDate(startDate: any, timeString: any) {
    const { hours, minutes } = this.extractTime(timeString);
    const result = new Date(startDate);
    result.setHours(result.getHours() + hours);
    result.setMinutes(result.getMinutes() + minutes);
    return result;
  }

  extractTime(timeString: string) {
    const [hours, minutes] = timeString.split(':').map(Number);
    return { hours, minutes };
  }

  formatDateForInput(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  updateFormattedBookingDate() {
    this.formattedBookingDate = this.formatDateForInput(this.bookingDate);
  }
}
