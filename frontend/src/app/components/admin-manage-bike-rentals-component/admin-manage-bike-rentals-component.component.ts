import {Component, Input} from '@angular/core'

@Component({
  selector: 'admin-manage-bike-rentals-component',
  templateUrl: 'admin-manage-bike-rentals-component.component.html',
  styleUrls: ['admin-manage-bike-rentals-component.component.css'],
})
export class AdminManageBikeRentalsComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  adminManageBikeRentalsTitle: string = 'Manage Active Tickets'

  constructor() {
  }
}
