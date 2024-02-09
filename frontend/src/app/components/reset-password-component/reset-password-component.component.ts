import { Component, Input } from '@angular/core'

@Component({
  selector: 'reset-password-component',
  templateUrl: 'reset-password-component.component.html',
  styleUrls: ['reset-password-component.component.css'],
})
export class ResetPasswordComponent {
  @Input()
  loginButtonText: string = 'Reset Password'
  @Input()
  alreadyHaveAccountText: string = 'Already account created?'
  @Input()
  alreadyHaveAccountSubtext: string = 'Log in'
  @Input()
  resetPasswordHint: string =
    'You will receive a password reset link via your inserted email'
  @Input()
  resetPwEmailTitle: string = 'Email'
  @Input()
  inputEmailPlaceholder: string = 'Enter email'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
