import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-update-bike-station-component',
  templateUrl: 'admin-update-bike-station-component.component.html',
  styleUrls: ['admin-update-bike-station-component.component.css'],
})
export class AdminUpdateBikeStationComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  adminManageBikestationButtonSaveBikeStation: string = 'Save'
  @Input()
  adminManageBikestationTitle: string = 'Manage Bikestation'
  @Input()
  adminManageBikestationDiscardBikeStation: string = 'Discard'
  constructor() {}
}
