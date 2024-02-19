import { Component, Input } from '@angular/core'
import {BikeStationService} from "../../services/bikestation.service";
import {BikeStation} from "../../types/bikeStation.type";

@Component({
  selector: 'bike-stations-component',
  templateUrl: 'bike-stations-component.component.html',
  styleUrls: ['bike-stations-component.component.css'],
})
export class BikeStationsComponent {
  bikeStations: BikeStation[] = [];
  filteredBikeStations: BikeStation[] = [];
  @Input()
  rootClassName: string = ''
  @Input()
  bikeStationsTitle: string = 'Bike Stations'
  constructor(private bikeStationService: BikeStationService) {}

  ngOnInit() {
    this.fetchData();
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
}
