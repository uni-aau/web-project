import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  footer_imprint_link: string = 'https://example.com'
  @Input()
  footer_data_privacy_link: string = 'https://example.com'
  @Input()
  footer_data_privacy_text: string = 'Datenschutz'
  @Input()
  footer_imprint_text: string = 'Impressum'
  @Input()
  image_alt: string = 'logo'
  @Input()
  image_src: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  footer_copyright: string = '© 2024 JaLeHD, All Rights Reserved.'
  constructor() {}
}
