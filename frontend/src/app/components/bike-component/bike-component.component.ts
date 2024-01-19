import { Component, Input } from '@angular/core'

@Component({
  selector: 'bike-component',
  templateUrl: 'bike-component.component.html',
  styleUrls: ['bike-component.component.css'],
})
export class BikeComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  text1: string = '<Bikename>'
  @Input()
  text5: string = 'Status: %s'
  @Input()
  button1: string = 'Book'
  @Input()
  text3: string = 'Model: %s'
  @Input()
  bike_station_image_src: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  text2: string = 'Size: %s'
  @Input()
  text4: string = 'Type: %s'
  @Input()
  image_alt: string = 'More Infos'
  constructor() {}
}
