import { Component, Input } from '@angular/core'

@Component({
  selector: 'reset-password-component',
  templateUrl: 'reset-password-component.component.html',
  styleUrls: ['reset-password-component.component.css'],
})
export class ResetPasswordComponent {
  @Input()
  resetPasswordButton: string = 'Reset Password'
  @Input()
  resetPasswordAlreadyAccountSubText: string = 'Already account created?'
  @Input()
  resetPasswordLogInText: string = 'Log in'
  @Input()
  resetPasswordHint: string =
    'You will receive a password reset link via your inserted email'
  @Input()
  resetPassworInputLabelEmail: string = 'Email'
  @Input()
  resetPasswordInputPlaceholderEmail: string = 'Enter email'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
