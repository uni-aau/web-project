import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-manage-bike-popup-component',
  templateUrl: 'admin-manage-bike-popup-component.component.html',
  styleUrls: ['admin-manage-bike-popup-component.component.css'],
})
export class AdminManageBikePopupComponent {
  @Input()
  adminManageBikeLabelAssignModels: string = 'Assign Model'
  @Input()
  rootClassName: string = ''
  @Input()
  adminManageBikeTitle: string = 'Manage Bike'
  @Input()
  adminManageBikeInputPlaceholderLongitude: string = 'Bike Name'
  @Input()
  adminManageBikeInputPlaceholderPrice: string = 'Enter Price'
  @Input()
  adminManageBikeStatus: string = 'Operational'
  @Input()
  adminManageBikeLabelName: string = 'Bike Name'
  @Input()
  adminManageBikeLabelPrice: string = 'Price'
  @Input()
  adminManageBikeImageTitle: string = 'Bike Image'
  constructor() {}
}
