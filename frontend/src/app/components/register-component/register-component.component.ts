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
  registerInputLbaleLastName: string = 'Last Name'
  @Input()
  registerInputPlaceholderUsername: string = 'Enter username'

  constructor(private authService: AuthService, private router: Router) {
  }

  login(usernameOrEmail: string, password: string) {
    this.authService.login(usernameOrEmail, password).subscribe({
      next: (response) => {
        console.log("Login successful", response)
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log("Login failed", err)
      }
    })
  }

  register(firstname: string, lastname: string, username: string, email: string, password: string) {
    this.authService.register(firstname, lastname, username, email, password).subscribe({
        next: (response) => {
          console.log("Registration successful", response);
          this.router.navigate(["/login"]);
        },
        error: (err) => {
          console.log("Registration failed", err);
        }
      }
    )
  }
}
