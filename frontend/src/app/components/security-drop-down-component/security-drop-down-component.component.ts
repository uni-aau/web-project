import { Component, Input } from '@angular/core'

@Component({
  selector: 'security-drop-down-component',
  templateUrl: 'security-drop-down-component.component.html',
  styleUrls: ['security-drop-down-component.component.css'],
})
export class SecurityDropDownComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  userSettingsChangePasswordTitle: string = 'Change Password'
  @Input()
  userSettingsChangePasswordConfirmPlaceholder: string = 'Confirm new password'
  @Input()
  userSettingsChangePasswordSubtitle: string =
    'Update your password to ensure account security. Use a strong password!'
  @Input()
  buttonSavePassword: string = 'Change'
  @Input()
  userSettingsChangePasswordPlaceholder: string = 'Insert new password'
  constructor() {}
}
