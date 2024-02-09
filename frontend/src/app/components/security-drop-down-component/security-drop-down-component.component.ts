import { Component, Input } from '@angular/core'

@Component({
  selector: 'security-drop-down-component',
  templateUrl: 'security-drop-down-component.component.html',
  styleUrls: ['security-drop-down-component.component.css'],
})
export class SecurityDropDownComponent {
  @Input()
  userSettingsChangePasswordSubtitle: string =
    'Update your password to ensure account security. Use a strong password!'
  @Input()
  userSettingsChangePasswordTitle: string = 'Change Password'
  @Input()
  rootClassName: string = ''
  @Input()
  userSettingsChangePasswordPlaceholder: string = 'Insert new password'
  @Input()
  userSettingsChangePasswordConfirmPlaceholder: string = 'Confirm new password'
  @Input()
  buttonSavePassword: string = 'Change'
  constructor() {}
}
