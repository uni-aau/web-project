import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { BikeStation } from '../../types/bikeStation.type';

@Component({
  selector: 'map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponent implements OnInit, OnChanges {
  private map: L.Map |undefined;
  @Input() stations: BikeStation[] = [];
  @Input() rootClassName: string = '';

  ngOnInit(): void {
    this.map = L.map('map').setView([46.624722, 14.305278], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.addStationsToMap();
  }

  private addStationsToMap(): void {
    console.log(this.stations + "add")
    if (this.stations && this.map && this.stations.length > 0) {
      this.stations.forEach(station => {
        L.marker([station.latitude, station.longitude])
          .addTo(this.map!)
          .bindPopup(`${station.station_name}: ${station.description}`);
      });
    }
  }
}
