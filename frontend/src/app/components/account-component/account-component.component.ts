import {Component, Input, OnDestroy} from '@angular/core'
import {UpdateUserService} from "../../services/update-user.service";
import {SharedService} from "../../services/shared.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'account-component',
  templateUrl: 'account-component.component.html',
  styleUrls: ['account-component.component.css'],
})
export class AccountComponent implements OnDestroy {
  @Input()
  accountSettingsTitle: string = 'Your account settings'
  @Input()
  rootClassName: string = ''
  @Input()
  accountName: string = '{0}'
  @Input()
  accountEmail: string = '{0}'

  private subscription: Subscription;

  constructor(private updateUserService: UpdateUserService, private sharedService: SharedService) {
    this.fetchUserData();

    // Updates Data when e.g. username was changed
    this.subscription = this.sharedService.dataChanged$.subscribe({
      next: () => {
        this.fetchUserData();
      }
    })
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
