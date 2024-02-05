import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-bike-station-search-component',
  templateUrl: 'admin-bike-station-search-component.component.html',
  styleUrls: ['admin-bike-station-search-component.component.css'],
})
export class AdminBikeStationSearchComponent {
  @Input()
  bikeStationsTitle: string = 'Bike Stations Management'
  @Input()
  rootClassName: string = ''
  @Input()
  bikeStationsSearchButtonSearch: string = 'Search'
  @Input()
  bikeStationsSearchButtonSearch1: string = 'Create'
  @Input()
  bikeStationsSearchInputPlaceholder: string = 'Search for bike stations'
  constructor() {}
}
