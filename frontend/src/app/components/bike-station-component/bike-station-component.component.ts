import { Component, Input } from '@angular/core'

@Component({
  selector: 'bike-station-component',
  templateUrl: 'bike-station-component.component.html',
  styleUrls: ['bike-station-component.component.css'],
})
export class BikeStationComponent {
  @Input()
  image_alt: string = 'More Infos'
  @Input()
  text1: string = '%s'
  @Input()
  text: string = 'Location:'
  @Input()
  image_src: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  button: string = 'Rate'
  @Input()
  button1: string = 'More Infos'
  @Input()
  text2: string = 'Information'
  @Input()
  text3: string = '%s | %s'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
