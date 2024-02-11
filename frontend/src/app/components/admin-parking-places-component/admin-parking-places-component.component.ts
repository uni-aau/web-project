import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-parking-places-component',
  templateUrl: 'admin-parking-places-component.component.html',
  styleUrls: ['admin-parking-places-component.component.css'],
})
export class AdminParkingPlacesComponent {
  @Input()
  adminParkingPlacesHint: string =
    'Select one or multiple categories per place. One bike per place can then be assigned'
  @Input()
  adminParkingPlacesTitle: string = 'Parking Places'
  @Input()
  rootClassName: string = ''
  @Input()
  adminParkingPlacesButtonAddPlace: string = 'Add Place'
  constructor() {}
}
