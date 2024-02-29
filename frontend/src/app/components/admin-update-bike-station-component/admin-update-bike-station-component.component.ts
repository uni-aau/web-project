import {Component, Input} from '@angular/core'

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
