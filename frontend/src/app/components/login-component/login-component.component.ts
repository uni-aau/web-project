import { Component, Input } from '@angular/core'

@Component({
  selector: 'login-component',
  templateUrl: 'login-component.component.html',
  styleUrls: ['login-component.component.css'],
})
export class LoginComponent {
  @Input()
  loginInputLabelPassword: string = 'Password'
  @Input()
  loginInputLabelUsername: string = 'Username or email'
  @Input()
  loginInputPlaceholderUsername: string = 'Enter username or email'
  @Input()
  rootClassName: string = ''
  @Input()
  loginButtonLogin: string = 'Login'
  @Input()
  loginNoAccountSubText: string = 'Click here to register'
  @Input()
  loginForgotPasswordText: string = 'Forgot your password?'
  @Input()
  loginNoAccount: string = "Don't have an account yet?"
  @Input()
  loginInputPlaceholderPassword: string = 'Enter your password'
  constructor() {}
}
