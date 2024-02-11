import { Component, Input } from '@angular/core'

@Component({
  selector: 'button-assign-update-delete-component',
  templateUrl: 'button-assign-update-delete-component.component.html',
  styleUrls: ['button-assign-update-delete-component.component.css'],
})
export class ButtonAssignUpdateDeleteComponent {
  @Input()
  buttonAssign: string = 'Assign Bike'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
