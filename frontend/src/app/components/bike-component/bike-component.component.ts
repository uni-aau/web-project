import { Component, Input } from '@angular/core'

@Component({
  selector: 'bike-component',
  templateUrl: 'bike-component.component.html',
  styleUrls: ['bike-component.component.css'],
})
export class BikeComponent {
  @Input()
  bikeAssignedStation: string = 'Assigned Bike Station: %s'
  @Input()
  rootClassName: string = ''
  @Input()
  bikeBikeName: string = '{0}'
  @Input()
  bikeStatus: string = 'Status: {0}'
  @Input()
  bikeModel: string = 'Model: {0}'
  @Input()
  bikePrice: string = 'Price: {0}'
  @Input()
  bikeImageSrc: string = '/assets/no-image.svg'
  @Input()
  bikeSize: string = 'Size: {0}'
  @Input()
  bikeCategory: string = 'Category: {0}'
  @Input()
  bikeImageAlt: string = 'More Infos'
  constructor() {}
}
