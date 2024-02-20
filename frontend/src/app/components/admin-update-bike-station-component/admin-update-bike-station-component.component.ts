import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core'
import {BikeStation} from "../../types/bikeStation.type";
import {
  AdminManageBikeStationComponent
} from "../admin-manage-bike-station-component/admin-manage-bike-station-component.component";

@Component({
  selector: 'admin-update-bike-station-component',
  templateUrl: 'admin-update-bike-station-component.component.html',
  styleUrls: ['admin-update-bike-station-component.component.css'],
})
export class AdminUpdateBikeStationComponent {
  @Output() save = new EventEmitter<string>();
  @Input()
  rootClassName: string = ''
  @Input()
  adminManageBikestationButtonSaveBikeStation: string = 'Save'
  @Input()
  adminManageBikeStationTitle: string = 'Manage Bikestation'
  @Input()
  adminManageBikeStationButtonDiscard: string = 'Discard'

  @ViewChild(AdminManageBikeStationComponent) manageBikeStationComponent: AdminManageBikeStationComponent | undefined;

  constructor() {}

  onSave(): void {
    console.log(this.manageBikeStationComponent!.sendDataToParent());
  }
}
