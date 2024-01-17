import { Component, Input } from '@angular/core'

@Component({
  selector: 'login-register-image-component',
  templateUrl: 'login-register-image-component.component.html',
  styleUrls: ['login-register-image-component.component.css'],
})
export class LoginRegisterImageComponent {
  @Input()
  image_src: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  rootClassName: string = ''
  @Input()
  image_alt: string = 'image'
  constructor() {}
}
