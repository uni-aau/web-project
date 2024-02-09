import { Component, Input } from '@angular/core'

@Component({
  selector: 'bike-stations-component',
  templateUrl: 'bike-stations-component.component.html',
  styleUrls: ['bike-stations-component.component.css'],
})
export class BikeStationsComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  bikeStationsTitle: string = 'Bike Stations'
  constructor() {}
}
