import {Component, Input} from '@angular/core'
import {UpdateUserService} from "../../services/update-user.service";

@Component({
  selector: 'security-drop-down-component',
  templateUrl: 'security-drop-down-component.component.html',
  styleUrls: ['security-drop-down-component.component.css'],
})
export class SecurityDropDownComponent {
  @Input()
  securitySettingsTitle: string = 'Security'
  @Input()
  securitySettingsPasswordDescription: string =
    'Update your password to ensure account security. Use a strong password!'
  @Input()
  securitySettingsTitlePassword: string = 'Change Password'
  @Input()
  rootClassName: string = ''
  @Input()
  securitySettingsInputPlaceholderNewPassword: string = 'Insert new password'
  @Input()
  securitySettingsInputPlaceholderConfirmNewPassword: string =
    'Confirm new password'
  @Input()
  securitySettingsButtonChange: string = 'Change'

  @Input()
  securitySettingsError: string = ''

  constructor(private updateUserService: UpdateUserService) {
  }

  changePassword(newPassword: string, newPasswordConfirmation: string) {
    if (!newPassword || !newPasswordConfirmation) {
      this.securitySettingsError = 'Password fields must not be empty!'
      return;
    }

    if (newPassword !== newPasswordConfirmation) {
      this.securitySettingsError = 'Passwords must be the same!'
      return;
    }

    this.updateUserService.changePassword(newPassword).subscribe({
      next: (response) => {
        console.log("Successfully changed password:", response);
      },
      error: (err) => {
        this.securitySettingsError = 'Could not change password, try again'
        console.log("Error:", err.error)
      }
    });

    this.securitySettingsError = '';
  }
}
