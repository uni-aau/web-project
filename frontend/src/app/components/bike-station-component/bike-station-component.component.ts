import { Component, Input } from '@angular/core'

@Component({
  selector: 'bike-station-component',
  templateUrl: 'bike-station-component.component.html',
  styleUrls: ['bike-station-component.component.css'],
})
export class BikeStationComponent {
  @Input()
  bikeStationDescriptionTitle: string = '<Location>'
  @Input()
  rootClassName: string = ''
  @Input()
  imageAlt: string = 'More Infos'
  @Input()
  bikeStationButtonViewRatings: string = 'View Ratings'
  @Input()
  bikeStationStarRatingNumber: string = '(%s)'
  @Input()
  bikeStationDescription: string = 'Lorem ipsum dolor sit amet'
  @Input()
  bikeStationButtonRate: string = 'Rate'
  @Input()
  bikeStationButtonMoreInfos: string = 'More Infos'
  @Input()
  bikeStationLocationTitle: string = '<Stationname>'
  @Input()
  bikeStationImageSrc: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  constructor() {}
}
