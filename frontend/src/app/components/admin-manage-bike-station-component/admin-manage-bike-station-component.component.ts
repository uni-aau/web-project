import {Component, EventEmitter, Input, Output} from '@angular/core'
import {BikeStations} from "../../pages/bike-stations/bike-stations.component";
import {BikeStation} from "../../types/bikeStation.type";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'admin-manage-bike-station-component',
  templateUrl: 'admin-manage-bike-station-component.component.html',
  styleUrls: ['admin-manage-bike-station-component.component.css'],
})
export class AdminManageBikeStationComponent {
  @Input()
  bikeStation: BikeStation =  {
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
  adminManageBikeStationStationInputPlaceholder: string = this.bikeStation.description

  @Input()
  adminManageBikeStationInputPlaceholderAddress: string = this.bikeStation.station_address
  @Input()
  adminManageBikeStationLabelAddress: string = 'Address'
  @Input()
  adminManageBikeStationLabelLongitude: string = "Longitude"
  @Input()
  adminManageBikeStationInputPlaceholderLatitude: number = this.bikeStation.latitude
  @Input()
  adminManageBikeStationInputPlaceholderName: string = this.bikeStation.station_name
  @Input()
  adminManageBikeStationImageTitle: string = 'Station Image'
  @Input()
  adminManageBikeStationInputPlaceholderLongitude: number = this.bikeStation.longitude
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
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("test");
    if (history.state && history.state.bikeStation) {
      this.bikeStation = history.state.bikeStation;
      this.adminManageBikeStationStationInputPlaceholder = this.bikeStation.description;
      this.adminManageBikeStationInputPlaceholderAddress = this.bikeStation.station_address;
      this.adminManageBikeStationInputPlaceholderLatitude = this.bikeStation.latitude;
      this.adminManageBikeStationInputPlaceholderName = this.bikeStation.station_name;
      this.adminManageBikeStationInputPlaceholderLongitude = this.bikeStation.longitude;
    }
  }

  sendDataToParent(): void {
    console.log(this.bikeStation)
    this.save.emit(this.bikeStation);
  }
}
