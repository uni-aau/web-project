import { Component, Input } from '@angular/core'

@Component({
  selector: 'user-account-drop-down-component',
  templateUrl: 'user-account-drop-down-component.component.html',
  styleUrls: ['user-account-drop-down-component.component.css'],
})
export class UserAccountDropDownComponent {
  @Input()
  button_save_name: string = 'Save'
  @Input()
  user_settings_change_username_title1: string = 'Update Username'
  @Input()
  user_settings_change_name_subtitle: string =
    'Here you can change your name by inserting your first and last name'
  @Input()
  user_settings_change_username_placeholder: string = 'Update username'
  @Input()
  user_settings_change_username_subtitle: string =
    'Change your username with which you will be identified. This username has to be unique!'
  @Input()
  button_save_username: string = 'Save'
  @Input()
  user_settings_change_name_title: string = 'Update Name'
  @Input()
  user_settings_input_name_placeholder: string = 'Insert your full name'
  @Input()
  button_save_email: string = 'Save'
  @Input()
  user_settings_change_email_placeholder: string = 'Insert your new email'
  @Input()
  rootClassName: string = ''
  @Input()
  user_settings_change_mail_title: string = 'Update E-Mail'
  @Input()
  user_settings_change_email_subtitle: string =
    'Change your email by inserting a new one in the input field below'
  constructor() {}
}
