import { Component, Input } from '@angular/core'

@Component({
  selector: 'login-register-image-component',
  templateUrl: 'login-register-image-component.component.html',
  styleUrls: ['login-register-image-component.component.css'],
})
export class LoginRegisterImageComponent {
  @Input()
  image_src: string = 'assets/logo_black.png'
  @Input()
  rootClassName: string = ''
  @Input()
  image_alt: string = 'image'
  constructor() {}
}
