import { Component, Input } from '@angular/core'
import {UpdateUserService} from "../../services/update-user.service";

@Component({
  selector: 'account-component',
  templateUrl: 'account-component.component.html',
  styleUrls: ['account-component.component.css'],
})
export class AccountComponent {
  @Input()
  accountSettingsTitle: string = 'Your account settings'
  @Input()
  rootClassName: string = ''
  @Input()
  accountName: string = '{0}'
  @Input()
  accountEmail: string = '{0}'
  constructor(private updateUserService: UpdateUserService) {
    this.fetchUserData();
  }

  fetchUserData() {
      this.updateUserService.fetchUserData().subscribe({
        next: (response) => {
          this.accountName = `${response[0].firstname} ${response[0].lastname} (${response[0].username})`
          this.accountEmail = response[0].email;
        },
        error: (err) => console.log("Error:", err.error)
      })
  }
}
