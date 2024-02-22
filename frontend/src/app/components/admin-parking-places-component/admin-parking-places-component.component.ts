import {Component, Input, OnInit} from '@angular/core'
import {Router} from "@angular/router";
import {ParkingSpot} from "../../types/parkingSpot.type";
import {BikeStation} from "../../types/bikeStation.type";
import {ParkingspotService} from "../../services/parkingspot.service";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'admin-parking-places-component',
  templateUrl: 'admin-parking-places-component.component.html',
  styleUrls: ['admin-parking-places-component.component.css'],
})
export class AdminParkingPlacesComponent implements OnInit {
  @Input()
  adminParkingPlacesHint: string =
    'Select one or multiple categories per place. One bike per place can then be assigned'
  @Input()
  adminParkingPlacesTitle: string = 'Parking Places'
  @Input()
  rootClassName: string = ''
  @Input()
  adminParkingPlacesButtonAddPlace: string = 'Add Place'

  bikeStation: BikeStation = {
    description: "string",
    latitude: 0,
    longitude: 0,
    station_address: "string",
    station_image_location: "string",
    station_name: "string",
    station_id: 0
  };

  parkingSpot: ParkingSpot = {
    spot_id: 0,
    station_id: 0,
    spot_number: 0
  };

  stationId = 0;
  parkingSpots: any[] = [];
  categories: any[] = [];

  constructor(private router: Router, private parkingService: ParkingspotService, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.parkingSpots = [];
    this.fetchCategories();
    if (history.state && history.state.bikeStation) {
      this.bikeStation = history.state.bikeStation;
      this.stationId = this.bikeStation.station_id;

      this.fetchParkingSpots();
    }
  }

  fetchParkingSpots() {
    this.parkingService.fetchParkingSpots(this.stationId).subscribe({
      next: (val) => this.parkingSpots = val,
      error: (err) => {
        if (err.status === 404) this.parkingSpots = [];
        else console.log(`Error while fetching parking spots from station ${this.stationId}`, err)
      }
    })
  }

  handleConfirm() {

  }

  handleCancel() {
    this.router.navigate(["/admin-bike-stations"]);
  }

  fetchCategories() {
    this.categoryService.getCategories().subscribe({
      next:(val) => this.categories = val,
      error:(err) => {
        if(err.status === 404) this.categories = [];
        else console.log("Error while fetching categories: ", err);
      }
    })
  }
}
