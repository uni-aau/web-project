import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-parking-places-component',
  templateUrl: 'admin-parking-places-component.component.html',
  styleUrls: ['admin-parking-places-component.component.css'],
})
export class AdminParkingPlacesComponent {
  @Input()
  adminParkingPlacesTitle: string = 'Parking Places'
  @Input()
  rootClassName: string = ''
  @Input()
  adminParkingPlacesButtonAddPlace: string = 'Add Place'
  constructor() {}
}
