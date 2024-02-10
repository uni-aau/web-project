import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-model-management',
  templateUrl: 'admin-model-management.component.html',
  styleUrls: ['admin-model-management.component.css'],
})
export class AdminModelManagement {
  @Input()
  adminModelManagement: string = 'Models Mangement'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
