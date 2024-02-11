import { Component, Input } from '@angular/core'

@Component({
  selector: 'security-drop-down-component',
  templateUrl: 'security-drop-down-component.component.html',
  styleUrls: ['security-drop-down-component.component.css'],
})
export class SecurityDropDownComponent {
  @Input()
  securitySettingsPasswordDescription: string =
    'Update your password to ensure account security. Use a strong password!'
  @Input()
  securitySettingsTitlePassword: string = 'Change Password'
  @Input()
  rootClassName: string = ''
  @Input()
  securitySettingsInputPlaceholderNewPassword: string = 'Insert new password'
  @Input()
  securitySettingsInputPlaceholderConfirmNewPassword: string =
    'Confirm new password'
  @Input()
  securitySettingsButtonChange: string = 'Change'
  @Input()
  securitySettingsTitle: string = 'Security'
  constructor() {}
}
