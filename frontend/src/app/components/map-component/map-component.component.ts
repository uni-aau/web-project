import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { BikeStation } from '../../types/bikeStation.type';
import { icon, Marker } from 'leaflet';

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

    const iconRetinaUrl = '/assets/marker-icon-2x.png';
    const iconUrl = '/assets/marker-icon.png';
    const shadowUrl = '/assets/marker-shadow.png';
    const iconDefault = icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    Marker.prototype.options.icon = iconDefault;
    this.addStationsToMap();
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
