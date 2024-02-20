import {Component, Inject, Input} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LanguageHandler} from "../../handler/LanguageHandler";
import {BikeService} from "../../services/bike.service";
import {BikeStationService} from "../../services/bikestation.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

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
    this.dialogRef.close(true);
  }

  handleCancel() {
    this.dialogRef.close(false);
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
    // console.log(this.data.categoryId);

    this.stationService.getFreeParkingPlace(stationId, "2").subscribe({
      next: (val) => this.adminAssignBikeParkingPlace = LanguageHandler.formatString(this.adminAssignBikeParkingPlaceOld, [val[0].spot_number]),
      error: (err) => {
        if (err.status === 404) {
          this.adminAssignBikeParkingPlace = LanguageHandler.formatString(this.adminAssignBikeParkingPlaceOld, [this.adminParkingPlaceFull])
        }
        console.log(err.error);
      }
    })



  }

}
