import { Component, Input } from '@angular/core'

@Component({
  selector: 'bike-station-bike-search-component',
  templateUrl: 'bike-station-bike-search-component.component.html',
  styleUrls: ['bike-station-bike-search-component.component.css'],
})
export class BikeStationBikeSearchComponent {
  @Input()
  bikeStationBikesSearchInputPlaceholder: string =
    'Search for bikes (select bike station first)'
  @Input()
  bikeStationBikesSearchButtonSearch: string = 'Search'
  @Input()
  bikeStationBikesSearchLocationStationText: string =
    'Location: %s | Station: %s'
  @Input()
  bikesTitle: string = 'Bikes'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
