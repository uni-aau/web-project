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
  imageSrc: string = '40007250-130a-4c14-a98c-29137ce9d520'
  @Input()
  footerCopyright: string = '© 2024 JaLeHD, All Rights Reserved.'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
