import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-manage-model-popup-component',
  templateUrl: 'admin-manage-model-popup-component.component.html',
  styleUrls: ['admin-manage-model-popup-component.component.css'],
})
export class AdminManageModelPopupComponent {
  @Input()
  adminManageModelLabelAssignModels: string = 'Assign Category'
  @Input()
  manageModelAssignModelErrorHint: string = ''
  @Input()
  manageModelNameErrorHint: string = ''
  @Input()
  manageModelPriceErrorHint: string = ''
  @Input()
  adminManageModelInputPlaceholderName: string = 'Enter name'
  @Input()
  adminManageModelInputPlaceholderPrice: string = 'Price'
  @Input()
  adminManageModelLabelPrice: string = 'Price'
  @Input()
  adminManageModelLabelName: string = 'Model Name'
  @Input()
  adminManageModelTitle: string = 'Manage Model'
  constructor() {}
}
