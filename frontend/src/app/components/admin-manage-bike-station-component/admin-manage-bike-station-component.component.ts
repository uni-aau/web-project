import {Component, EventEmitter, Input, Output} from '@angular/core'
import {BikeStation} from "../../types/bikeStation.type";
import {ActivatedRoute, Router} from "@angular/router";
import {Config} from "../../Config"
import {BikeStationService} from "../../services/bikestation.service";

@Component({
  selector: 'admin-manage-bike-station-component',
  templateUrl: 'admin-manage-bike-station-component.component.html',
  styleUrls: ['admin-manage-bike-station-component.component.css'],
})
export class AdminManageBikeStationComponent {
  @Input()
  bikeStation: BikeStation = {
    description: "string",
    latitude: 0,
    longitude: 0,
    station_address: "string",
    station_image_location: "string",
    station_name: "string",
    station_id: 0
  };

  @Output() save: EventEmitter<BikeStation> = new EventEmitter<BikeStation>();


  @Input()
  adminManageBikeStationStationLabelDescription: string = 'Describe your station with a few words'
  @Input()
  adminManageBikeStationStationInputPlaceholder: string = 'Station Description'

  @Input()
  adminManageBikeStationInputPlaceholderAddress: string = 'Station Address'
  @Input()
  adminManageBikeStationLabelAddress: string = 'Address'
  @Input()
  adminManageBikeStationLabelLongitude: string = "Longitude"
  @Input()
  adminManageBikeStationInputPlaceholderLatitude: string = 'Latitude'
  @Input()
  adminManageBikeStationInputPlaceholderName: string = 'Station Name'
  @Input()
  adminManageBikeStationImageTitle: string = 'Station Image'
  @Input()
  adminManageBikeStationInputPlaceholderLongitude: string = 'Longitude'
  @Input()
  adminManageBikeStationLabelLatitude: string = 'Latitude'
  @Input()
  rootClassName: string = ''
  @Input()
  adminManageBikeStationStationLabelName: string = 'Station Name'
  @Input()
  adminManageBikeStationLongitudeError: string = ''
  @Input()
  adminManageBikeStationLatitudeError: string = ''
  @Input()
  adminManageBikeStationDescriptionError: string = ''
  @Input()
  adminManageBikeStationAddressError: string = ''
  @Input()
  adminManageBikeStationStationNameError: string = ''

  @Output() onDataChange: EventEmitter<any> = new EventEmitter<any>();

  longitude: number | undefined;
  latitude: number | undefined;
  stationName: string = '';
  stationDescription: string = '';
  stationAddress: string = '';
  imageLink: string = '';
  stationId = -1;
  maxDescriptionCharacters = 60;

  constructor(private route: ActivatedRoute, private router: Router, private stationService: BikeStationService) {
  }

  ngOnInit(): void {
    if (history.state && history.state.bikeStation) {
      this.bikeStation = history.state.bikeStation;
      this.longitude = this.bikeStation.longitude;
      this.latitude = this.bikeStation.latitude;
      this.stationName = this.bikeStation.station_name;
      this.stationAddress = this.bikeStation.station_address;
      this.stationDescription = this.bikeStation.description;
      this.stationId = this.bikeStation.station_id;
      this.imageLink = this.bikeStation.station_image_location;
    }
  }

  handleConfirm() {
    const longitudeRegex = /^-?([1-9]?\d(\.\d+)?|1[0-7]\d(\.\d+)?|180(\.0+)?)$/;
    const latitudeRegex = /^-?([1-8]?\d(\.\d+)?|90(\.0+)?)$/;

    if (!this.longitude || !longitudeRegex.test(String(this.longitude))) {
      this.adminManageBikeStationLongitudeError = 'Insert valid longitude (-180 to 180)';
      return;
    }
    this.adminManageBikeStationLongitudeError = '';

    if (!this.latitude || !latitudeRegex.test(String(this.latitude))) {
      this.adminManageBikeStationLatitudeError = 'Insert valid latitude (-90 to 90)';
      return;
    }
    this.adminManageBikeStationLatitudeError = '';

    if (!this.stationName.trim()) {
      this.adminManageBikeStationStationNameError = 'Insert valid station name';
      return;
    }
    this.adminManageBikeStationStationNameError = '';

    if (!this.stationAddress.trim()) {
      this.adminManageBikeStationAddressError = 'Insert valid station address';
      return;
    }
    this.adminManageBikeStationAddressError = '';

    if (this.stationDescription.length > this.maxDescriptionCharacters) {
      this.adminManageBikeStationDescriptionError = `Insert max. ${this.maxDescriptionCharacters} characters`
      return;
    }

    if (!this.imageLink) this.imageLink = Config.noImageLink;

    if (this.stationId > 0) this.executeUpdateQuery()
    else this.executeInsertionQuery();
  }

  handleMapChange(latLong: any) {
    const {lat, lng} = latLong;

    this.longitude = lng.toFixed(6);
    this.latitude = lat.toFixed(6);
  }

  handleCancel() {
    this.router.navigate(["/admin-bike-stations"]);
  }

  executeUpdateQuery() {
    this.stationService.updateStation(this.stationId, this.stationName, this.stationDescription, this.stationAddress, this.longitude, this.latitude, this.imageLink).subscribe({
      next: (val) => this.handleCancel(),
      error: (err) => console.log(`Error while updating station ${this.stationId} `, err)
    })
  }

  executeInsertionQuery() {
    this.stationService.createStation(this.stationName, this.stationDescription, this.stationAddress, this.longitude, this.latitude, this.imageLink).subscribe({
      next: (val) => this.handleCancel(),
      error: (err) => console.log(`Error while creating station `, err)
    })
  }

}
