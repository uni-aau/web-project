import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-bike-station-component',
  templateUrl: 'admin-bike-station-component.component.html',
  styleUrls: ['admin-bike-station-component.component.css'],
})
export class AdminBikeStationComponent {
  @Input()
  bikeStationButtonMoreInfos: string = 'Update'
  @Input()
  bikeStationImageSrc: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  bikeStationDescription: string = 'Lorem ipsum dolor sit amet'
  @Input()
  bikeStationButtonMoreInfos2: string = 'Delete'
  @Input()
  imageAlt: string = 'More Infos'
  @Input()
  bikeStationLocationTitle: string = '<Stationname>'
  @Input()
  bikeStationStarRatingNumber: string = '(%s)'
  @Input()
  bikeStationButtonRate: string = 'Delete Ratings'
  @Input()
  bikeStationDescriptionTitle: string = '<Location>'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
