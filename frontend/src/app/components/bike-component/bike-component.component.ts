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
  bikesBikeName: string = '%s'
  @Input()
  bikesStatus: string = 'Status: %s'
  @Input()
  bikesModel: string = 'Model: %s'
  @Input()
  bikePrice: string = 'Price: %s'
  @Input()
  bikesImageSrc: string = '/assets/no-image.svg'
  @Input()
  bikesSize: string = 'Size: %s'
  @Input()
  bikesType: string = 'Category: %s'
  @Input()
  imageAlt: string = 'More Infos'
  constructor() {}
}
