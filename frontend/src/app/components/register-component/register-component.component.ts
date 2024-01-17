import { Component, Input } from '@angular/core'

@Component({
  selector: 'register-component',
  templateUrl: 'register-component.component.html',
  styleUrls: ['register-component.component.css'],
})
export class RegisterComponent {
  @Input()
  input_lastname_placeholder_text: string = 'Enter last name'
  @Input()
  no_account_subtext: string = 'Click here to register'
  @Input()
  login_password_title: string = 'Password'
  @Input()
  login_username_title: string = 'Username or email'
  @Input()
  rootClassName: string = ''
  @Input()
  register_button_text: string = 'Register'
  @Input()
  register_first_name_title: string = 'First Name'
  @Input()
  register_account_hint: string =
    'By clicking Register you accept the JaleHD Terms of Use and acknowledge the Privacy Statement and Cookie Policy'
  @Input()
  input_firstname_placeholder_text: string = 'Enter first name'
  @Input()
  input_password_placeholder_text: string = 'Enter your password'
  @Input()
  register_last_name_title: string = 'Last Name'
  @Input()
  input_password_username_text: string = 'Enter username or email'
  constructor() {}
}
