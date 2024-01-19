import { Component, Input } from '@angular/core'

@Component({
  selector: 'bike-station-component',
  templateUrl: 'bike-station-component.component.html',
  styleUrls: ['bike-station-component.component.css'],
})
export class BikeStationComponent {
  @Input()
  bike_station_description_title: string = '<Location>'
  @Input()
  rootClassName: string = ''
  @Input()
  image_alt: string = 'More Infos'
  @Input()
  text: string = '(%s)'
  @Input()
  bike_station_description: string = 'Lorem ipsum dolor sit amet'
  @Input()
  bike_station_button_rate: string = 'Rate'
  @Input()
  bike_station_button_more_infos: string = 'More Infos'
  @Input()
  bike_station_location_title: string = '<Stationname>'
  @Input()
  bike_station_image_src: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  constructor() {}
}
