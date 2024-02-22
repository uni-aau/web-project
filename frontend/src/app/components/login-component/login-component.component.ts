import { Component, Input } from '@angular/core'
import {AuthService} from  "../../services/auth.service"
import { Router } from '@angular/router';

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
  @Input()
  loginError: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  login(usernameOrEmail: string, password: string){
    this.authService.login(usernameOrEmail, password).subscribe({
      next: (response) => {
        this.loginError = '';
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('isAdmin', response.is_admin);
        localStorage.setItem('user_id', response.user_id);
        this.router.navigate(['/']);
      },
      error: (err) => {
        if(err.status === 404 || err.status === 401) this.loginError = 'Invalid Username or Password';
        else this.loginError = 'Unexpected error occurred'
        console.log("Login failed", err)
      }
    })
  }
}
