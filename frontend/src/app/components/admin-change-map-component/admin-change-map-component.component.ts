import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import * as L from 'leaflet';
import {icon, Marker} from 'leaflet';
import {BikeStation} from '../../types/bikeStation.type';

@Component({
  selector: 'admin-change-map-component',
  templateUrl: './admin-change-map-component.component.html',
  styleUrls: ['./admin-change-map-component.component.css']
})
export class AdminChangeMapComponent implements OnInit, OnChanges, OnDestroy {
  @Input() stations: BikeStation[] = [];
  @Input() rootClassName: string = '';
  private map: L.Map | undefined;

  ngOnInit(): void {
    this.map = L.map('mapChange').setView([46.624722, 14.305278], 13);
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

  ngOnDestroy() {
    if (this.map) {
      this.map.off();
      this.map.remove();
      this.map = undefined;
    }
  }

  private addStationsToMap(): void {
    if (this.stations && this.map && this.stations.length > 0) {
      this.stations.forEach(station => {
        L.marker([station.latitude, station.longitude])
          .addTo(this.map!)
          .bindPopup(`${station.station_name}: ${station.description}`);
      });
    }
  }
}
