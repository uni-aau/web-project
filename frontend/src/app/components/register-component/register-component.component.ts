import { Component, Input } from '@angular/core'

@Component({
  selector: 'register-component',
  templateUrl: 'register-component.component.html',
  styleUrls: ['register-component.component.css'],
})
export class RegisterComponent {
  @Input()
  inputEmailPlaceholder: string = 'Enter email'
  @Input()
  inputLastnamePlaceholderText: string = 'Enter last name'
  @Input()
  loginPasswordTitle: string = 'Password'
  @Input()
  registerUsernameTitle: string = 'Username'
  @Input()
  registerEmailTitle: string = 'Email'
  @Input()
  rootClassName: string = ''
  @Input()
  registerButtonText: string = 'Register'
  @Input()
  registerFirstNameTitle: string = 'First Name'
  @Input()
  registerAccountHint: string =
    'By clicking Register you accept the JaleHD Terms of Use and acknowledge the Privacy Statement and Cookie Policy'
  @Input()
  inputFirstnamePlaceholderText: string = 'Enter first name'
  @Input()
  inputPasswordPlaceholderText: string = 'Enter your password'
  @Input()
  registerLastNameTitle: string = 'Last Name'
  @Input()
  inputUsernamePlaceholder: string = 'Enter username'
  constructor() {}
}
