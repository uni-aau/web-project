import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {TicketService} from "../../services/ticket.service";
import {PopupService} from "../../services/popup.service";
import {LanguageHandler} from "../../handler/LanguageHandler";
import {BikeService} from "../../services/bike.service";
import {DateHandler} from "../../handler/DateHandler";

@Component({
    selector: 'booking-active-rentals-list-entry-component',
    templateUrl: 'booking-active-rentals-list-entry-component.component.html',
    styleUrls: ['booking-active-rentals-list-entry-component.component.css'],
})
export class BookingActiveRentalsListEntryComponent implements OnInit {
    @Input()
    bookingActiveRentalsEntryImage: string = '/assets/no-image.svg'
    @Input()
    bookingActiveRentalsEntryRentingInformation: string =
        'Renting Start: {0} | Due Date: {1}'
    @Input()
    bookingActiveRentalsEntryLocationInformation: string =
        'Bike Station: {0} | Parking Place: {1}'
    @Input()
    rootClassName: string = ''
    @Input()
    bookingActiveRentalsEntrySelectedBike: string = 'Selected Bike: {0}'
    @Input()
    bookingActiveRentalsEntryImageAlt: string = 'image'
    @Input()
    bookingActiveRentalsEntryType: string = 'Booked Type: {0}'
    @Input()
    bookingActiveRentalsEntryStatus: string = 'Status: {0}'

    @Input()
    rentalsData: any | undefined;
    bikeData: any | undefined;

    @Output() onReturnBike: EventEmitter<any> = new EventEmitter<any>();

    constructor(private ticketService: TicketService, private popupService: PopupService, private bikeService: BikeService) {
    }

    ngOnInit() {
        this.fetchBike();
        this.insertData();
    }

    fetchBike() {
        this.bikeService.getBike(this.rentalsData.bike_id).subscribe({
            next: (val) => this.bikeData = val,
            error: (err) => console.log(err)
        })
    }

    insertData() {
        if (this.rentalsData) {
            this.bookingActiveRentalsEntryType = 'Booked Type: ' + this.rentalsData.booked_type;
            this.bookingActiveRentalsEntryStatus = 'Status: ' + this.rentalsData.status;
            this.bookingActiveRentalsEntryRentingInformation = LanguageHandler.formatString(this.bookingActiveRentalsEntryRentingInformation, [DateHandler.formatTimestamp(this.rentalsData.renting_start), DateHandler.formatTimestamp(this.rentalsData.renting_end)])
            console.log(this.rentalsData)
        }
    }


    handleReturnBike() {
        console.log(this.bikeData)
        this.popupService.openReturnBikePopup(this.rentalsData.ticket_id, this.bikeData[0].category_id).subscribe({
            next: (val) => {
                if (val && val.spotNumber && val.stationId) this.executeBikeAssignmentQuery(val);
            },
            error: (err) => {

            }
        })
    }

    executeBikeAssignmentQuery(val: any) {
        this.bikeService.assignParkingSpot(val.stationId, val.spotNumber, this.rentalsData.bike_id).subscribe({
            next: (val) => {
                if (val.success) {
                    this.closeRentalTicket();
                } else console.log("Error, bike assignment was not successful: ", val);
            },
            error: (err) => console.log(err)
        })
    }

    closeRentalTicket() {
        this.bikeService.updateBikeStatus(this.rentalsData.bike_id, 'Available').subscribe({
            next: (val) => console.log(val),
            error: (err) => console.log(err)
        })

        this.ticketService.updateTicketStatus(this.rentalsData.ticket_id, 'Completed').subscribe({
            next: (val) => {
                console.log(val)
                this.onReturnBike.emit();
            },
            error: (err) => console.log(err)
        })
    }
}


