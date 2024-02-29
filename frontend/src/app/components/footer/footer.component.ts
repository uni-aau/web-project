import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  footerDataPrivacy: string = 'Data Privacy'
  @Input()
  footerImprint: string = 'Imprint'
  @Input()
  imageAlt: string = 'logo'
  @Input()
  footerImageSrc: string = '/assets/logo_black-1500h.png'
  @Input()
  footerCopyrightInformation: string = '© 2024 JaLeHD, All Rights Reserved.'
  @Input()
  rootClassName: string = ''

  constructor() {
  }
}
