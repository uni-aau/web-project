import {Component, EventEmitter, Input, Output} from '@angular/core'
import {LanguageHandler} from "../../handler/LanguageHandler";
import {PopupService} from "../../services/popup.service";
import {BikeService} from "../../services/bike.service";
import {TicketService} from "../../services/ticket.service";
import {DateHandler} from "../../handler/DateHandler";
import {WalletService} from "../../services/wallet.service";

@Component({
  selector: 'booked-type-entry-component',
  templateUrl: 'booked-type-entry-component.component.html',
  styleUrls: ['booked-type-entry-component.component.css'],
})
export class BookedTypeEntryComponent {
  @Input()
  bookedTypeEntryTicketId: string = 'TicketID: {0}'
  @Input()
  bookedTypeEntryRentingInformation: string =
    'Rent Start: {0} | Renting Time: {0}'
  @Input()
  bookedTypeEntryBookingDate: string = 'Booked at: {0}'
  @Input()
  bookedTypeEntryBookedType: string = 'Booked Type: {0} (Category|Bike|Model)'
  @Input()
  rootClassName: string = ''
  @Input()
  bookedTypeEntryTitle: string = '{0} (Price: {1}$)'
  @Input()
  bookedTypeEntryStatus: string =
    'Status: {0}'
  @Input()
  bookedTypeEntryDueDate: string = 'Due Date: {0}'
  @Input()
  ticketData: any;

  @Output()
  onDataChange: EventEmitter<any> = new EventEmitter<any>();

  bike: any
  showRentButton: boolean = true;


  constructor(private popupService: PopupService, private bikeService: BikeService,
              private ticketService: TicketService, private walletService: WalletService) {
  }

  ngOnInit() {
    this.insertData();
  }

  openQrCode() {
    this.popupService.openQrCodePopup();
  }

  performRent($event: MouseEvent) {
    this.popupService.openRentTicketPopup(
      this.bike.bike_name,
      this.bike.assigned_to,
      this.ticketData.booked_type,
      new Date(),
      this.ticketData.ticket_id
    ).subscribe((res) => {
      if (res && res.success) {
        this.bikeService.unassignBike(this.bike.bike_id).subscribe({
          next: (val) => {
            this.ticketService.rentTicket(this.ticketData.ticket_id).subscribe({
              next: (val) => {
                console.log(val);
                this.onDataChange.emit(0);
              },
              error: (err) => console.log(err)
            })
          }, error: (err) => console.log(err)
        })
      }
    })
  }

  private insertData() {
    console.log(this.ticketData)
    this.bookedTypeEntryTicketId = LanguageHandler.formatString(
      'TicketID: {0}', [this.ticketData.ticket_id]);
    this.bookedTypeEntryRentingInformation = LanguageHandler.formatString(
      "Rent Start: {0} | Renting Time: {1}", [DateHandler.formatTimestamp(this.ticketData.renting_start), DateHandler.formatTimestamp(this.ticketData.renting_end)]);
    this.bookedTypeEntryBookingDate = LanguageHandler.formatString(
      "Booked at: {0}", [DateHandler.formatTimestamp(this.ticketData.booking_time)]);
    this.bookedTypeEntryBookedType = LanguageHandler.formatString(
      "Booked Type: {0}", [this.ticketData.booked_type]);

    if (this.ticketData.bike_id) this.bookedTypeEntryTitle = LanguageHandler.formatString(
      "{0} (Price: {1}$)", [this.ticketData.bike_name, this.ticketData.price]);
    else if (this.ticketData.model_id) this.bookedTypeEntryTitle = LanguageHandler.formatString(
      "{0} (Price: {1}$)", [this.ticketData.model_name, this.ticketData.price]);
    else this.bookedTypeEntryTitle = LanguageHandler.formatString(
        "{0} (Price: {1}$)", [this.ticketData.category_name, this.ticketData.price]);

    this.bookedTypeEntryStatus = LanguageHandler.formatString(
      "Status: {0}", [this.ticketData.status]);
    this.bookedTypeEntryDueDate = LanguageHandler.formatString(
      "Due Date: {0}", [DateHandler.formatTimestamp(this.ticketData.renting_end)]);

    if (this.ticketData.status === "Rented") {
      this.showRentButton = false
    }

    this.bikeService.getBike(this.ticketData.bike_id).subscribe((bikes: any) => {
      this.bike = bikes[0]
    })
  }
}
