import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-bikes',
  templateUrl: 'home-bikes.component.html',
  styleUrls: ['home-bikes.component.css'],
})
export class HomeBikes {
  @Input()
  image_src_home_bikes_1: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  image_alt_home_bikes_4: string = 'image'
  @Input()
  image_alt_home_bikes_1: string = 'image'
  @Input()
  image_src_home_bikes_3: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  heading_home_bikes_4: string = 'Heading'
  @Input()
  text_home_bikes_2: string = 'Lorem ipsum dolor sit amet'
  @Input()
  text_home_bikes_3: string = 'Lorem ipsum dolor sit amet'
  @Input()
  image_src_home_bikes_4: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  heading_home_bikes_3: string = 'Heading'
  @Input()
  image_alt_home_bikes_2: string = 'image'
  @Input()
  text_home_bikes_4: string = 'Lorem ipsum dolor sit amet'
  @Input()
  image_alt_home_bikes_3: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  text_home_bikes_1: string = 'Lorem ipsum dolor sit amet'
  @Input()
  heading_home_bikes_2: string = 'Heading'
  @Input()
  image_src_home_bikes_2: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  heading_home_bikes_1: string = 'Heading'
  constructor() {}
}
