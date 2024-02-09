import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-manage-category-popup-component',
  templateUrl: 'admin-manage-category-popup-component.component.html',
  styleUrls: ['admin-manage-category-popup-component.component.css'],
})
export class AdminManageCategoryPopupComponent {
  @Input()
  adminManageCategoryAssignModels: string = 'Assign Models'
  @Input()
  adminManageCategoryPriceLabel: string = 'Price'
  @Input()
  adminManageCategoryNameLabel: string = 'Category Name'
  @Input()
  adminManageCategoryInputPlaceholderPrice: string = 'Price'
  @Input()
  adminManageCategoryInputPlaceholderName: string = 'Enter name'
  @Input()
  adminManageCategoryTitle: string = 'Manage Category'
  constructor() {}
}
