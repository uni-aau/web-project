import { Component, Input } from '@angular/core'

@Component({
  selector: 'user-account-drop-down-component',
  templateUrl: 'user-account-drop-down-component.component.html',
  styleUrls: ['user-account-drop-down-component.component.css'],
})
export class UserAccountDropDownComponent {
  @Input()
  userSettingsTitle: string = 'User Settings'
  @Input()
  userSettingsInputFirstNamePlaceholder: string = 'Insert your first name'
  @Input()
  userSettingsChangeUsernameTitle1: string = 'Update Username'
  @Input()
  userSettingsChangeMailTitle: string = 'Update E-Mail'
  @Input()
  userSettingsChangeEmailPlaceholder: string = 'Insert your new email'
  @Input()
  userSettingsChangeUsernamePlaceholder: string = 'Update username'
  @Input()
  userSettingsButtonSaveName: string = 'Save'
  @Input()
  userSettingsButtonSaveUsername: string = 'Save'
  @Input()
  userSettingsButtonSaveEmail: string = 'Save'
  @Input()
  userSettingsChangeNameTitle: string = 'Update Name'
  @Input()
  userSettingsChangeNameSubtitle: string =
    'Here you can change your name by inserting your first and last name'
  @Input()
  userSettingsChangeUsernameSubtitle: string =
    'Change your username with which you will be identified. This username has to be unique!'
  @Input()
  rootClassName: string = ''
  @Input()
  userSettingsChangeEmailSubtitle: string =
    'Change your email by inserting a new one in the input field below'
  @Input()
  userSettingsChangeLastNamePlaceholder: string = 'Insert your last name'
  @Input()
  userSettingsChangeEmailError: string = '{0}'
  @Input()
  userSettingsChangeUsernameError: string = '{0}'
  @Input()
  userSettingsChangeNameError: string = '{0}'
  constructor() {}

  updateName(firstname: string, lastname: string) {
    console.log(firstname + " " + lastname)
  }

  updateEmail(email: string) {
    console.log("!")
  }

  updateUsername(username: string) {
    console.log("!")
  }
}
