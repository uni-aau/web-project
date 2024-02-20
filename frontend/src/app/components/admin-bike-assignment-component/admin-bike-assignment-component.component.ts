import {Component, Inject, Input} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LanguageHandler} from "../../handler/LanguageHandler";
import {BikeStationService} from "../../services/bikestation.service";

@Component({
  selector: 'admin-bike-assignment-component',
  templateUrl: 'admin-bike-assignment-component.component.html',
  styleUrls: ['admin-bike-assignment-component.component.css'],
})
export class AdminBikeAssignmentComponent {
  @Input()
  adminAssignBikeBikeModel: string = 'Bike Model: {0}'
  @Input()
  rootClassName: string = ''
  @Input()
  adminAssignBikeErrorText: string = ''
  @Input()
  adminAssignBikeBikeCategories: string = 'Bike Category: {0}'
  @Input()
  adminAssignBikeParkingPlace: string = 'Parking Place: -'
  adminAssignBikeParkingPlaceOld: string = 'Parking Place: {0}'
  @Input()
  adminAssignBikeSelectorLabel: string = 'Assign Bike Station'
  @Input()
  adminAssignBikeTitle: string = 'Assign Bike'
  @Input()
  adminAssignBikeError: string = '';
  @Input()
  adminAssignBikeSelectorGeneralSelection: string = 'Select station'

  bikeStations: any[] = []
  adminParkingPlaceFull = 'Full';
  spotNumber = "-1";
  stationId = "-1";

  constructor(public dialogRef: MatDialogRef<AdminBikeAssignmentComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private stationService: BikeStationService) {
    this.setDescription();
    this.bikeStations = [];
    this.fetchBikeStations();
  }

  setDescription() {
    this.adminAssignBikeBikeCategories = LanguageHandler.formatString(this.adminAssignBikeBikeCategories, [this.data.category])
    this.adminAssignBikeBikeModel = LanguageHandler.formatString(this.adminAssignBikeBikeModel, [this.data.model])
  }

  handleConfirm() {
    if (this.spotNumber === "-1" || this.stationId === "-1") {
      this.adminAssignBikeErrorText = 'Select a valid bike station';
      return;
    }

    this.adminAssignBikeErrorText = '';
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
          this.adminAssignBikeParkingPlace = LanguageHandler.formatString(this.adminAssignBikeParkingPlaceOld, [this.spotNumber])
        },
        error: (err) => {
          if (err.status === 404) {
            this.adminAssignBikeParkingPlace = LanguageHandler.formatString(this.adminAssignBikeParkingPlaceOld, [this.adminParkingPlaceFull])
          }
          this.spotNumber = "-1";
          console.log(err.error);
        }
      })
    } else {
      this.spotNumber = "-1";
      this.adminAssignBikeParkingPlace = LanguageHandler.formatString(this.adminAssignBikeParkingPlaceOld, ["-"])
    }
  }
}
