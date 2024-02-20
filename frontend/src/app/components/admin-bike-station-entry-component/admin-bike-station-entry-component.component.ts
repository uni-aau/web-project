import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Router} from "@angular/router";
import {BikeStation} from "../../types/bikeStation.type";

@Component({
  selector: 'admin-bike-station-entry-component',
  templateUrl: 'admin-bike-station-entry-component.component.html',
  styleUrls: ['admin-bike-station-entry-component.component.css'],
})
export class AdminBikeStationEntryComponent {
  @Output() update = new EventEmitter<string>();
  @Input()
  bikeStation: BikeStation =  {
    description: "string",
    latitude: 0,
    longitude: 0,
    station_address: "string",
    station_image_location: "string",
    station_name: "string"
  };
  @Input()
  adminBikeStationEntryButtonUpdate: string = 'Update'
  @Input()
  adminBikeStationEntryImageSrc: string = '/assets/no-image.svg'
  @Input()
  adminBikeStationEntryButtonDeleteRatings: string = 'Delete Ratings'
  @Input()
  adminBikeStationEntryDescription: string = '{0}'
  @Input()
  adminBikeStationEntryButtonDelete: string = 'Delete'
  @Input()
  adminBikeStationEntryImageAlt: string = 'image'
  @Input()
  adminBikeStationEntryStationName: string = '{0}'
  @Input()
  adminBikeStationEntryStarRatingNumber: string = '({0})'
  @Input()
  adminBikeStationEntryButtonManageRatings: string = 'Manage Ratings'
  @Input()
  adminBikeStationEntryLocation: string = '{0}'
  @Input()
  rootClassName: string = ''
  constructor(private router : Router) {}

  onUpdate(){
    this.router.navigate(["/admin-manage-bike-station"], {
      state: {
        bikeStation: this.bikeStation
      }
    })
  }
}
