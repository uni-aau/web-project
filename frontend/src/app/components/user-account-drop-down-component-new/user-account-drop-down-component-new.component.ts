import { Component, Input } from '@angular/core'

@Component({
  selector: 'user-account-drop-down-component-new',
  templateUrl: 'user-account-drop-down-component-new.component.html',
  styleUrls: ['user-account-drop-down-component-new.component.css'],
})
export class UserAccountDropDownComponentNew {
  @Input()
  rootClassName: string = ''
  @Input()
  text: string = 'Change Name'
  @Input()
  text1: string =
    'Here you can change your name by inserting your first and last name'
  @Input()
  textinput_placeholder: string = 'Insert your full name'
  @Input()
  button: string = 'Save'
  constructor() {}
}
