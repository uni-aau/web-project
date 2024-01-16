import { Component, Input } from '@angular/core'

@Component({
  selector: 'login-component',
  templateUrl: 'login-component.component.html',
  styleUrls: ['login-component.component.css'],
})
export class LoginComponent {
  @Input()
  login_username_title: string = 'Username or email'
  @Input()
  input_password_username_text: string = 'Enter username or email'
  @Input()
  login_password_title: string = 'Password'
  @Input()
  input_password_placeholder_text: string = 'Enter your password'
  @Input()
  login_button_text: string = 'Login'
  @Input()
  no_account: string = "Don't have an account yet?"
  @Input()
  no_account_subtext: string = 'Click here to register'
  @Input()
  forgot_password_text: string = 'Forgot your password?'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
