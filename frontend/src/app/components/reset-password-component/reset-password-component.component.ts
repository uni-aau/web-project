import {Component, Input} from '@angular/core'
import {AuthService} from "../../services/auth.service"
import {Router} from '@angular/router';

@Component({
    selector: 'reset-password-component',
    templateUrl: 'reset-password-component.component.html',
    styleUrls: ['reset-password-component.component.css'],
})
export class ResetPasswordComponent {
    @Input()
    resetPasswordButton: string = 'Reset Password'
    @Input()
    resetPasswordAlreadyAccountSubText: string = 'Already account created?'
    @Input()
    resetPasswordLogInText: string = 'Log in'
    @Input()
    resetPasswordHint: string =
        'You will receive a password reset link via your inserted email'
    @Input()
    resetPassworInputLabelEmail: string = 'Email'
    @Input()
    resetPassworInputLabelOldPassword: string = 'Old Password'
    @Input()
    resetPassworInputLabelNewPassword: string = 'New Password'
    @Input()
    resetPasswordInputPlaceholderOldPassword: string = 'Enter old password'
    @Input()
    resetPasswordInputPlaceholderNewPassword: string = 'Enter new password'
    @Input()
    resetPasswordInputPlaceholderEmail: string = 'Enter email'
    @Input()
    rootClassName: string = ''

    constructor(private authService: AuthService, private router: Router) {
    }

    changePassword(email: string, oldPassword: string, newPassword: string) {
        this.authService.changePassword(email, oldPassword, newPassword).subscribe({
                next: (response) => {
                    console.log("Change successful", response);
                    this.router.navigate(["/login"]);
                },
                error: (err) => {
                    console.log("Change failed", err);
                }
            }
        )
    }
}
