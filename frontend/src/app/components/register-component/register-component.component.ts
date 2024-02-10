import { Component, Input } from '@angular/core'

@Component({
  selector: 'register-component',
  templateUrl: 'register-component.component.html',
  styleUrls: ['register-component.component.css'],
})
export class RegisterComponent {
  @Input()
  registerInputPlaceholderEmail: string = 'Enter email'
  @Input()
  registerInputPlaceholderLastName: string = 'Enter last name'
  @Input()
  registerInputLabelPassword: string = 'Password'
  @Input()
  registerInputLabelUsername: string = 'Username'
  @Input()
  registerInputLabelEmail: string = 'Email'
  @Input()
  rootClassName: string = ''
  @Input()
  registerButton: string = 'Register'
  @Input()
  registerInputLabelFirstName: string = 'First Name'
  @Input()
  registerAccountHint: string =
    'By clicking Register you accept the JaleHD Terms of Use and acknowledge the Privacy Statement and Cookie Policy'
  @Input()
  registerInputPlaceholderFirstName: string = 'Enter first name'
  @Input()
  registerInputPlaceholderPassword: string = 'Enter your password'
  @Input()
  registerInputLbaleLastName: string = 'Last Name'
  @Input()
  registerInputPlaceholderUsername: string = 'Enter username'
  constructor() {}
}
