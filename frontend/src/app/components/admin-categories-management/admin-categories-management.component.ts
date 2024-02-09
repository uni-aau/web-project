import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-categories-management',
  templateUrl: 'admin-categories-management.component.html',
  styleUrls: ['admin-categories-management.component.css'],
})
export class AdminCategoriesManagement {
  @Input()
  adminCateogriesManagementTitle: string = 'Categories Management'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
