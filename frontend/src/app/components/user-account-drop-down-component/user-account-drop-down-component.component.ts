import { Component, Input } from '@angular/core'

@Component({
  selector: 'user-account-drop-down-component',
  templateUrl: 'user-account-drop-down-component.component.html',
  styleUrls: ['user-account-drop-down-component.component.css'],
})
export class UserAccountDropDownComponent {
  @Input()
  buttonSaveName: string = 'Save'
  @Input()
  userSettingsChangeUsernameTitle1: string = 'Update Username'
  @Input()
  userSettingsChangeNameSubtitle: string =
    'Here you can change your name by inserting your first and last name'
  @Input()
  userSettingsChangeUsernamePlaceholder: string = 'Update username'
  @Input()
  userSettingsChangeUsernameSubtitle: string =
    'Change your username with which you will be identified. This username has to be unique!'
  @Input()
  buttonSaveUsername: string = 'Save'
  @Input()
  userSettingsChangeNameTitle: string = 'Update Name'
  @Input()
  userSettingsInputNamePlaceholder: string = 'Insert your full name'
  @Input()
  buttonSaveEmail: string = 'Save'
  @Input()
  userSettingsChangeEmailPlaceholder: string = 'Insert your new email'
  @Input()
  rootClassName: string = ''
  @Input()
  userSettingsChangeMailTitle: string = 'Update E-Mail'
  @Input()
  userSettingsChangeEmailSubtitle: string =
    'Change your email by inserting a new one in the input field below'
  constructor() {}
}
