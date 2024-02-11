import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-parking-place-selection-component',
  templateUrl: 'admin-parking-place-selection-component.component.html',
  styleUrls: ['admin-parking-place-selection-component.component.css'],
})
export class AdminParkingPlaceSelectionComponent {
  @Input()
  adminParkingPlacesPlaceNumber: string = '{0}.'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
