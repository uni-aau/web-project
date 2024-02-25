import {Component, Inject, Input} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BikeStationService} from "../../services/bikestation.service";
import {LanguageHandler} from "../../handler/LanguageHandler";

@Component({
    selector: 'return-bike-popup-component',
    templateUrl: 'return-bike-popup-component.component.html',
    styleUrls: ['return-bike-popup-component.component.css'],
})
export class ReturnBikePopupComponent {
    @Input()
    returnBikeTicketId: string = 'Ticket ID: {0}'
    @Input()
    returnBikeParkingPlace: string = 'Parking Place: -'
    returnBikeParkingPlaceOld: string = 'Parking Place: {0}'
    @Input()
    returnBikeLabelBikeStation: string = 'Select Bike Station'
    @Input()
    returnBikeTitle: string = 'Return Bike'
    @Input()
    returnBikeError: string = ''
    @Input()
    adminAssignBikeSelectorGeneralSelection: string = 'Select Station'

    stationId = "-1";
    spotNumber = "-1";
    bikeStations: any[] = []
    adminParkingPlaceFull = 'Full';

    constructor(public dialogRef: MatDialogRef<ReturnBikePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private stationService: BikeStationService) {
        this.setDescription();
        this.bikeStations = [];
        this.fetchBikeStations();
    }

    setDescription() {
        this.returnBikeTicketId = 'Ticket ID: ' + this.data.ticketId;
    }

    handleConfirm() {
        if (this.spotNumber === "-1" || this.stationId === "-1") {
            this.returnBikeError = 'Select a valid bike station';
            return;
        }

        this.returnBikeError = '';
        this.dialogRef.close({spotNumber: this.spotNumber, stationId: parseInt(this.stationId)});
    }


    handleCancel() {
        this.dialogRef.close();
    }


    fetchBikeStations() {
        this.stationService.getBikeStations().subscribe({
            next: (val) => this.bikeStations = val,
            error: (err) => {
                if (err.status === 404) this.bikeStations = [];
                console.log(err.error);
            }
        })
    }

    handleSelect(event: any) {
        const stationId = event.target.value;

        if (stationId != -1) {
            this.stationService.getFreeParkingPlace(stationId, this.data.categoryId).subscribe({
                next: (val) => {
                    this.spotNumber = val[0].spot_number
                    this.stationId = stationId;
                    this.returnBikeParkingPlace = LanguageHandler.formatString(this.returnBikeParkingPlaceOld, [this.spotNumber])
                },
                error: (err) => {
                    if (err.status === 404) {
                        this.returnBikeParkingPlace = LanguageHandler.formatString(this.returnBikeParkingPlaceOld, [this.adminParkingPlaceFull])
                    }
                    this.spotNumber = "-1";
                    console.log(err.error);
                }
            })
        } else {
            this.spotNumber = "-1";
            this.returnBikeParkingPlace = LanguageHandler.formatString(this.returnBikeParkingPlaceOld, ["-"])
        }
    }
}
