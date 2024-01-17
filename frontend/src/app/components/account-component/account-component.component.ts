import { Component, Input } from '@angular/core'

@Component({
  selector: 'account-component',
  templateUrl: 'account-component.component.html',
  styleUrls: ['account-component.component.css'],
})
export class AccountComponent {
  @Input()
  account_settings_title: string = 'Your account settings'
  @Input()
  image_src: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  image_alt: string = 'image'
  @Input()
  account_name: string = '<Name>'
  @Input()
  account_email: string = '<name>@<mail>.<end>'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
