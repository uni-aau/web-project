import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  footerDataPrivacyText: string = 'Datenschutz'
  @Input()
  footerImprintText: string = 'Impressum'
  @Input()
  imageAlt: string = 'logo'
  @Input()
  imageSrc: string = '/assets/logo_black.png'
  @Input()
  footerCopyright: string = '© 2024 JaLeHD, All Rights Reserved.'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
