import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-bikes',
  templateUrl: 'home-bikes.component.html',
  styleUrls: ['home-bikes.component.css'],
})
export class HomeBikes {
  @Input()
  imageSrcHomeBikes1: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  imageAltHomeBikes4: string = 'image'
  @Input()
  imageAltHomeBikes1: string = 'image'
  @Input()
  imageSrcHomeBikes3: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  headingHomeBikes4: string = 'Heading'
  @Input()
  textHomeBikes2: string = 'Lorem ipsum dolor sit amet'
  @Input()
  textHomeBikes3: string = 'Lorem ipsum dolor sit amet'
  @Input()
  imageSrcHomeBikes4: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  headingHomeBikes3: string = 'Heading'
  @Input()
  imageAltHomeBikes2: string = 'image'
  @Input()
  textHomeBikes4: string = 'Lorem ipsum dolor sit amet'
  @Input()
  imageAltHomeBikes3: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  textHomeBikes1: string = 'Lorem ipsum dolor sit amet'
  @Input()
  headingHomeBikes2: string = 'Heading'
  @Input()
  imageSrcHomeBikes2: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  headingHomeBikes1: string = 'Heading'
  constructor() {}
}
