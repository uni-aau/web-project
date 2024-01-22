import { Component, Input } from '@angular/core'

@Component({
  selector: 'bike-station-search-component',
  templateUrl: 'bike-station-search-component.component.html',
  styleUrls: ['bike-station-search-component.component.css'],
})
export class BikeStationSearchComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  bikeStationsTitle: string = 'Bike Stations'
  @Input()
  bikeStationsSearchInputPlaceholder: string = 'Search for bike stations'
  @Input()
  bikeStationsSearchButtonSearch: string = 'Search'
  constructor() {}
}
