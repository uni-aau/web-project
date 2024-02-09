import { Component, Input } from '@angular/core'

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
  accountName: string = '%s'
  @Input()
  accountEmail: string = '%s'
  constructor() {}
}
