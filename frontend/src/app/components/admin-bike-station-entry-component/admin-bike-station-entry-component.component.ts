import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-bike-station-entry-component',
  templateUrl: 'admin-bike-station-entry-component.component.html',
  styleUrls: ['admin-bike-station-entry-component.component.css'],
})
export class AdminBikeStationEntryComponent {
  @Input()
  adminBikeStationButtonUpdate: string = 'Update'
  @Input()
  adminbikeStationImageSrc: string = '/assets/no-image.svg'
  @Input()
  adminBikeStationButtonDeleteRatings: string = 'Delete Ratings'
  @Input()
  adminBikeStationDescription: string = '%s'
  @Input()
  adminbikeStationButtonDelete: string = 'Delete'
  @Input()
  imageAlt: string = 'More Infos'
  @Input()
  adminBikeStationStationName: string = '<Stationname>'
  @Input()
  adminBikeStationStarRatingNumber: string = '(%s)'
  @Input()
  adminBikeStationButtonManageRatings: string = 'Manage Ratings'
  @Input()
  adminBikeStationLocation: string = '<Location>'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
