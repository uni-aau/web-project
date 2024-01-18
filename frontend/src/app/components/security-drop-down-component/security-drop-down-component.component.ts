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
  user_settings_change_password_title: string = 'Change Password'
  @Input()
  user_settings_change_password_confirm_placeholder: string =
    'Confirm new password'
  @Input()
  user_settings_change_password_subtitle: string =
    'Update your password to ensure account security. Use a strong password!'
  @Input()
  button_save_password: string = 'Change'
  @Input()
  user_settings_change_password_placeholder: string = 'Insert new password'
  constructor() {}
}
