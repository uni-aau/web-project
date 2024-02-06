import { Component, Input } from '@angular/core'

@Component({
  selector: 'user-account-drop-down-component',
  templateUrl: 'user-account-drop-down-component.component.html',
  styleUrls: ['user-account-drop-down-component.component.css'],
})
export class UserAccountDropDownComponent {
  @Input()
  userSettingsChangeNameTitle: string = 'Update Name'
  @Input()
  userSettingsChangeNameSubtitle: string =
    'Here you can change your name by inserting your first and last name'
  @Input()
  userSettingsInputNamePlaceholder: string = 'Insert your full name'
  @Input()
  buttonSaveName: string = 'Save'
  @Input()
  rootClassName: string = ''
  @Input()
  userSettingsChangeNameTitle1: string = 'Update Name'
  @Input()
  userSettingsChangeNameSubtitle1: string =
    'Here you can change your name by inserting your first and last name'
  @Input()
  userSettingsInputNamePlaceholder1: string = 'Insert your full name'
  @Input()
  buttonSaveName1: string = 'Save'
  @Input()
  userSettingsChangeNameTitle11: string = 'Update Name'
  @Input()
  userSettingsChangeNameSubtitle11: string =
    'Here you can change your name by inserting your first and last name'
  @Input()
  userSettingsInputNamePlaceholder11: string = 'Insert your full name'
  @Input()
  buttonSaveName11: string = 'Save'
  @Input()
  userSettingsChangeMailTitle: string = 'Update E-Mail'
  @Input()
  userSettingsChangeEmailSubtitle: string =
    'Change your email by inserting a new one in the input field below'
  @Input()
  userSettingsChangeEmailPlaceholder: string = 'Insert your new email'
  @Input()
  buttonSaveEmail: string = 'Save'
  @Input()
  userSettingsChangeUsernameTitle1: string = 'Update Username'
  @Input()
  userSettingsChangeUsernameSubtitle: string =
    'Change your username with which you will be identified. This username has to be unique!'
  @Input()
  userSettingsChangeUsernamePlaceholder: string = 'Update username'
  @Input()
  buttonSaveUsername: string = 'Save'
  constructor() {}
}
