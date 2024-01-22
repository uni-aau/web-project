import { Component, Input } from '@angular/core'

@Component({
  selector: 'login-component',
  templateUrl: 'login-component.component.html',
  styleUrls: ['login-component.component.css'],
})
export class LoginComponent {
  @Input()
  loginPasswordTitle: string = 'Password'
  @Input()
  loginUsernameTitle: string = 'Username or email'
  @Input()
  inputPasswordUsernameText: string = 'Enter username or email'
  @Input()
  rootClassName: string = ''
  @Input()
  loginButtonText: string = 'Login'
  @Input()
  noAccountSubtext: string = 'Click here to register'
  @Input()
  forgotPasswordText: string = 'Forgot your password?'
  @Input()
  noAccount: string = "Don't have an account yet?"
  @Input()
  inputPasswordPlaceholderText: string = 'Enter your password'
  constructor() {}
}
