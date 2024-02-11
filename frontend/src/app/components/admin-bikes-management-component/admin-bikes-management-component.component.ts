import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-bikes-management-component',
  templateUrl: 'admin-bikes-management-component.component.html',
  styleUrls: ['admin-bikes-management-component.component.css'],
})
export class AdminBikesManagementComponent {
  @Input()
  adminBikesManagementTitlte: string = 'Manage Bikes'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
