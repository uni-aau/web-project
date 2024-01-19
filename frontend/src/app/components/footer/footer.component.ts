import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  footer_data_privacy_text: string = 'Datenschutz'
  @Input()
  footer_imprint_text: string = 'Impressum'
  @Input()
  image_alt: string = 'logo'
  @Input()
  image_src: string = '40007250-130a-4c14-a98c-29137ce9d520'
  @Input()
  footer_copyright: string = '© 2024 JaLeHD, All Rights Reserved.'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
