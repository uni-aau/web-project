import { Component, Input } from '@angular/core'

@Component({
  selector: 'account-component',
  templateUrl: 'account-component.component.html',
  styleUrls: ['account-component.component.css'],
})
export class AccountComponent {
  @Input()
  imageSrc: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  accountSettingsTitle: string = 'Your account settings'
  @Input()
  imageAlt: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  accountName: string = '<Name>'
  @Input()
  accountEmail: string = '<name>@<mail>.<end>'
  constructor() {}
}
