import {Component, Input} from '@angular/core'

@Component({
  selector: 'button-create-component',
  templateUrl: 'button-create-component.component.html',
  styleUrls: ['button-create-component.component.css'],
})
export class ButtonCreateComponent {
  @Input()
  buttonCreate: string = 'Create'
  @Input()
  rootClassName: string = ''

  constructor() {
  }
}
