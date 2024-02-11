import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-bike-stations-component',
  templateUrl: 'admin-bike-stations-component.component.html',
  styleUrls: ['admin-bike-stations-component.component.css'],
})
export class AdminBikeStationsComponent {
  @Input()
  adminManageBikeStationsTitle: string = 'Manage Bike Stations'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
