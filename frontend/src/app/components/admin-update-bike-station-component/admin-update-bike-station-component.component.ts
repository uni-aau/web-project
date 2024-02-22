import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core'
import {BikeStation} from "../../types/bikeStation.type";
import {
  AdminManageBikeStationComponent
} from "../admin-manage-bike-station-component/admin-manage-bike-station-component.component";
import {Router} from "@angular/router";

@Component({
  selector: 'admin-update-bike-station-component',
  templateUrl: 'admin-update-bike-station-component.component.html',
  styleUrls: ['admin-update-bike-station-component.component.css'],
})
export class AdminUpdateBikeStationComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  adminManageBikeStationTitle: string = 'Manage Bike Station'

  constructor() {
  }
}
