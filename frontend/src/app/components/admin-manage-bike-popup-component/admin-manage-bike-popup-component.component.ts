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
  adminManageBikeInputPlaceholderSize: string = 'Bike Size'
  @Input()
  adminManageBikeInputPlaceholderPrice: string = 'Enter Price'
  @Input()
  adminManageBikeStatus: string = 'Operational'
  @Input()
  adminManageBikeLabeSize: string = 'Bike Size'
  @Input()
  adminManageBikeLabelPrice: string = 'Price'
  @Input()
  adminManageBikeImageTitle: string = 'Bike Image'
  @Input()
  adminManageBikeLabelName1: string = 'Bike Name'
  @Input()
  adminManageBikeInputPlaceholderName: string = 'Bike Name'
  @Input()
  adminManageBikeNameError: string = ''
  @Input()
  adminManageBikeSizeError: string = ''
  @Input()
  adminManageBikePriceError: string = ''
  @Input()
  adminManageBikeModelError: string = ''
  constructor() {}
}
