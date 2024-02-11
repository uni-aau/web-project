import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-bike-station-entry-component',
  templateUrl: 'admin-bike-station-entry-component.component.html',
  styleUrls: ['admin-bike-station-entry-component.component.css'],
})
export class AdminBikeStationEntryComponent {
  @Input()
  adminBikeStationEntryButtonUpdate: string = 'Update'
  @Input()
  adminBikeStationEntryImageSrc: string = '/assets/no-image.svg'
  @Input()
  adminBikeStationEntryButtonDeleteRatings: string = 'Delete Ratings'
  @Input()
  adminBikeStationEntryDescription: string = '{0}'
  @Input()
  adminBikeStationEntryButtonDelete: string = 'Delete'
  @Input()
  adminBikeStationEntryImageAlt: string = 'image'
  @Input()
  adminBikeStationEntryStationName: string = '{0}'
  @Input()
  adminBikeStationEntryStarRatingNumber: string = '({0})'
  @Input()
  adminBikeStationEntryButtonManageRatings: string = 'Manage Ratings'
  @Input()
  adminBikeStationEntryLocation: string = '{0}'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
