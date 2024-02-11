import { Component, Input } from '@angular/core'

@Component({
  selector: 'bike-station-component',
  templateUrl: 'bike-station-component.component.html',
  styleUrls: ['bike-station-component.component.css'],
})
export class BikeStationComponent {
  @Input()
  bikeStationLocation: string = '{0}'
  @Input()
  rootClassName: string = ''
  @Input()
  bikeStationImageAlt: string = 'More Infos'
  @Input()
  bikeStationButtonViewRatings: string = 'View Ratings'
  @Input()
  bikeStationRatingAmount: string = '({0})'
  @Input()
  bikeStationDescription1: string = '{0}'
  @Input()
  bikeStationButtonRate1: string = 'Rate'
  @Input()
  bikeStationButtonMoreInfos1: string = 'More Infos'
  @Input()
  bikeStationTitle: string = '{0}'
  @Input()
  bikeStationImageSrc1: string = '/assets/no-image.svg'
  constructor() {}
}
