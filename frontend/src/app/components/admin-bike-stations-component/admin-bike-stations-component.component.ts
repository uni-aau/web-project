import {Component, Input} from '@angular/core'
import {BikeStationService} from "../../services/bikestation.service";
import {BikeStation} from "../../types/bikeStation.type";
import {Router} from "@angular/router";

@Component({
  selector: 'admin-bike-stations-component',
  templateUrl: 'admin-bike-stations-component.component.html',
  styleUrls: ['admin-bike-stations-component.component.css'],
})
export class AdminBikeStationsComponent {
  @Input()
  adminManageBikeStationsTitle: string = 'Manage Bike Stations'
  @Input()
  rootClassName: string = ''
  bikeStations: BikeStation[] = [];
  filteredBikeStations: BikeStation[] = [];

  constructor(private bikeStationService: BikeStationService, private router: Router) {
  }

  ngOnInit() {
    this.fetchData();
    console.log("fetch")
  }

  fetchData() {
    this.bikeStationService.getBikeStations().subscribe(data => {
      console.log(data);
      this.bikeStations = data;
      this.performSearch("")
    });
  }

  performSearch(searchTerm: string) {
    console.log(searchTerm)
    if (!searchTerm) {
      this.filteredBikeStations = this.bikeStations;
    } else {
      this.filteredBikeStations = this.bikeStations.filter(station =>
        station.station_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        station.station_address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        station.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  createStation($event: any) {
    this.router.navigate(["/admin-manage-bike-station"])
  }

  handleReviewDeletion() {
    this.fetchData();
  }

  handleStationDelete() {
    this.fetchData();
  }

  handleUpdatedStation() {
    this.fetchData();
  }
}
