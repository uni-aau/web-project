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
  bikesBikeName: string = '<Bikename>'
  @Input()
  bikesStatus: string = 'Status: %s'
  @Input()
  bikesBook: string = 'Book'
  @Input()
  bikesModel: string = 'Model: %s'
  @Input()
  bikesImageSrc: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  bikesSize: string = 'Size: %s'
  @Input()
  bikesType: string = 'Type: %s'
  @Input()
  imageAlt: string = 'More Infos'
  constructor() {}
}
