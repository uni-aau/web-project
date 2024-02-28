import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import {icon, Marker} from 'leaflet';
import { BikeStation } from '../../types/bikeStation.type';

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

@Component({
  selector: 'admin-change-map-component',
  templateUrl: './admin-change-map-component.component.html',
  styleUrls: ['./admin-change-map-component.component.css']
})
export class AdminChangeMapComponent implements OnInit, OnChanges, OnDestroy {
  @Input() station: BikeStation | undefined;
  @Input() rootClassName: string = '';
  @Input() mapHint : string = 'Select Longitude/Latitude by clicking anywhere on the map'
  @Output() mapChange: EventEmitter<any> = new EventEmitter<any>();

  private map: L.Map | undefined;

  ngOnInit(): void {
    this.map = L.map('mapChange').setView([46.624722, 14.305278], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    Marker.prototype.options.icon = iconDefault;

    this.map.on('click', this.onMapClick.bind(this));

    this.addStationToMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.map) {
      this.addStationToMap();
    }
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.off();
      this.map.remove();
      this.map = undefined;
    }
  }

  private onMapClick(e: L.LeafletMouseEvent): void {
    const {lat, lng} = e.latlng;
    this.mapChange.emit(e.latlng);

    // Remove existing markers not corresponding to the station (if any)
    if (this.map) {
      this.map.eachLayer((layer) => {
        if (layer instanceof L.Marker && this.station && (layer.getLatLng().lat !== this.station.latitude || layer.getLatLng().lng !== this.station.longitude)) {
          this.map?.removeLayer(layer);
        }
      });

      // Add a new marker for the clicked location
      L.marker([lat, lng], {icon: iconDefault}).addTo(this.map);
    }
  }

  private addStationToMap(): void {
    // Clear existing markers first, except the newly added click marker
    if (this.map) {
      this.map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          this.map?.removeLayer(layer);
        }
      });
    }

    // Add the station marker if station data is present
    if (this.station && this.map) {
      L.marker([this.station.latitude, this.station.longitude], {icon: iconDefault})
        .addTo(this.map)
        .bindPopup(`${this.station.station_name}: ${this.station.description}`);
    }
  }
}
