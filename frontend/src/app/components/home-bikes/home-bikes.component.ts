import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-bikes',
  templateUrl: 'home-bikes.component.html',
  styleUrls: ['home-bikes.component.css'],
})
export class HomeBikes {
  @Input()
  imageSrcHomeBikes1: string = '/assets/roadbike-200h.png'
  @Input()
  imageAltHomeBikes4: string = 'image'
  @Input()
  imageAltHomeBikes1: string = 'image'
  @Input()
  imageSrcHomeBikes3: string = '/assets/tourbike-200h.png'
  @Input()
  headingHomeBikes4: string = 'E-Bikes'
  @Input()
  textHomeBikes2: string = 'Rugged and versatile, designed for off-road trails.'
  @Input()
  textHomeBikes3: string = 'Durable and comfortable, ideal for long journeys.'
  @Input()
  imageSrcHomeBikes4: string = '/assets/ebike-200h.png'
  @Input()
  headingHomeBikes3: string = 'Tour Bikes'
  @Input()
  imageAltHomeBikes2: string = 'image'
  @Input()
  textHomeBikes4: string = 'Effortless riding with electric power assistance.'
  @Input()
  imageAltHomeBikes3: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  textHomeBikes1: string = 'Sleek and fast, perfect for pavement riding.'
  @Input()
  headingHomeBikes2: string = 'Offroad Bikes'
  @Input()
  imageSrcHomeBikes2: string = '/assets/offroadbike-200h.png'
  @Input()
  headingHomeBikes1: string = 'Road Bikes'
  constructor() {}
}
