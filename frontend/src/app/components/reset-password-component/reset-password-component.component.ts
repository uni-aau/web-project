import { Component, Input } from '@angular/core'

@Component({
  selector: 'reset-password-component',
  templateUrl: 'reset-password-component.component.html',
  styleUrls: ['reset-password-component.component.css'],
})
export class ResetPasswordComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  reset_pw_email_title: string = 'Email'
  @Input()
  input_email_placeholder: string = 'Enter email'
  @Input()
  login_button_text: string = 'Login'
  @Input()
  already_have_account_text: string = 'Already account created?'
  @Input()
  already_have_account_subtext: string = 'Log in'
  @Input()
  reset_password_hint: string =
    'You will receive a password reset link via your inserted email'
  constructor() {}
}
