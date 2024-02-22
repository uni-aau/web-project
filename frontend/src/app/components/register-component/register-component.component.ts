import {Component, Input} from '@angular/core'
import {AuthService} from "../../services/auth.service"
import {Router} from '@angular/router';

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
  registerInputLabelLastName: string = 'Last Name'
  @Input()
  registerInputPlaceholderUsername: string = 'Enter username'
  @Input()
  registerFirstnameError: string = ''
  @Input()
  registerLastnameError: string = ''
  @Input()
  registerUsernameError: string = ''
  @Input()
  registerEmailError: string = ''
  @Input()
  registerPasswordError: string = ''

  constructor(private authService: AuthService, private router: Router) {
  }

  handleRegister(firstname: string, lastname: string, username: string, email: string, password: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstname.trim()) {
      this.registerFirstnameError = 'Enter valid firstname';
      return;
    }
    this.registerFirstnameError = '';

    if (!lastname.trim()) {
      this.registerLastnameError = 'Enter valid lastname';
      return;
    }
    this.registerLastnameError = '';

    if (!username.trim()) {
      this.registerUsernameError = 'Enter valid username';
      return;
    }
    this.registerUsernameError = '';

    if (!email.trim() || !emailRegex.test(email)) {
      this.registerEmailError = 'Enter valid email';
      return;
    }
    this.registerEmailError = '';

    if (!password.trim()) {
      this.registerPasswordError = 'Enter valid password';
      return;
    }
    this.registerPasswordError = '';

    this.register(firstname, lastname, username, email, password);
  }

  register(firstname: string, lastname: string, username: string, email: string, password: string) {
    this.authService.register(firstname, lastname, username, email, password).subscribe({
        next: (response) => {
          console.log("Registration successful", response);
          this.router.navigate(["/login"]);
        },
        error: (err) => {
          if (err.status === 400 && err.error.exists && err.error.username) {
            this.registerUsernameError = 'This username already exists';
          } else if (err.status === 400 && err.error.exists && err.error.email) {
            this.registerEmailError = 'This email already exists';
          } else {
            console.log("Registration failed", err);
          }
        }
      }
    )
  }
}
