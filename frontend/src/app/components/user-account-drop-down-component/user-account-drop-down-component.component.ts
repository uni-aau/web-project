import {Component, Input} from '@angular/core'
import {UpdateUserService} from "../../services/update-user.service";
import {SharedService} from "../../services/shared.service";

@Component({
    selector: 'user-account-drop-down-component',
    templateUrl: 'user-account-drop-down-component.component.html',
    styleUrls: ['user-account-drop-down-component.component.css'],
})
export class UserAccountDropDownComponent {
    @Input()
    userSettingsTitle: string = 'User Settings'
    @Input()
    userSettingsInputFirstNamePlaceholder: string = 'Insert your first name'
    @Input()
    userSettingsChangeUsernameTitle1: string = 'Update Username'
    @Input()
    userSettingsChangeMailTitle: string = 'Update E-Mail'
    @Input()
    userSettingsChangeEmailPlaceholder: string = 'Insert your new email'
    @Input()
    userSettingsChangeUsernamePlaceholder: string = 'Update username'
    @Input()
    userSettingsButtonSaveName: string = 'Save'
    @Input()
    userSettingsButtonSaveUsername: string = 'Save'
    @Input()
    userSettingsButtonSaveEmail: string = 'Save'
    @Input()
    userSettingsChangeNameTitle: string = 'Update Name'
    @Input()
    userSettingsChangeNameSubtitle: string =
        'Here you can change your name by inserting your first and last name'
    @Input()
    userSettingsChangeUsernameSubtitle: string =
        'Change your username with which you will be identified. This username has to be unique!'
    @Input()
    rootClassName: string = ''
    @Input()
    userSettingsChangeEmailSubtitle: string =
        'Change your email by inserting a new one in the input field below'
    @Input()
    userSettingsChangeLastNamePlaceholder: string = 'Insert your last name'
    @Input()
    userSettingsChangeEmailError: string = ''
    @Input()
    userSettingsChangeUsernameError: string = ''
    @Input()
    userSettingsChangeNameError: string = ''

    constructor(private updateUserService: UpdateUserService, private sharedService: SharedService) {
    }

    updateName(firstname: string, lastname: string) {
        if (!firstname || !lastname) {
            this.userSettingsChangeNameError = 'Firstname and Lastname needs to be inserted!'
            return;
        }

        this.updateUserService.updateFirstName(firstname).subscribe({
            next: (response) => {
                this.sharedService.emitDataChange(); // Notify Account Component
                console.log("Successfully changed firstname: ", response)
            },
            error: (err) => {
                this.userSettingsChangeNameError = 'Could not update firstname please try again'
                console.log("Error:", err.error);
            }
        })

        this.updateUserService.updateLastName(lastname).subscribe({
            next: (response) => {
                console.log("Successfully changed lastname: ", response)
            },
            error: (err) => {
                this.userSettingsChangeNameError = 'Could not update lastname please try again'
                console.log("Error:", err.error);
            }
        })

        this.userSettingsChangeNameError = ''
    }

    updateEmail(email: string) {
        if (!email) {
            this.userSettingsChangeEmailError = 'Email needs to be inserted!'
            return;
        }

        this.updateUserService.updateEmail(email).subscribe({
            next: (response) => {
                this.sharedService.emitDataChange();
                console.log("Successfully changed email: ", response)
            },
            error: (err) => {
                if (err.error.exists === true) {
                    this.userSettingsChangeEmailError = 'This email already exists!';
                    return;
                }
                this.userSettingsChangeEmailError = 'Could not update email!';
                console.log("Error:", err.error);
            }
        })

        this.userSettingsChangeEmailError = '';
    }

    updateUsername(username: string) {
        if (!username) {
            this.userSettingsChangeUsernameError = 'Username needs to be inserted!';
            return;
        }

        this.updateUserService.updateUsername(username).subscribe({
            next: (response) => {
                this.sharedService.emitDataChange();
                console.log("Successfully changed username: ", response)
            },
            error: (err) => {
                if (err.error.exists === true) {
                    this.userSettingsChangeUsernameError = 'This username already exists!';
                    return;
                }
                this.userSettingsChangeUsernameError = 'Could not update username!';
                console.log("Error:", err.error);
            }
        })

        this.userSettingsChangeUsernameError = '';
    }
}
