import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-manage-bike-station-component',
  templateUrl: 'admin-manage-bike-station-component.component.html',
  styleUrls: ['admin-manage-bike-station-component.component.css'],
})
export class AdminManageBikeStationComponent {
  @Input()
  adminManageBikeStationInputPlaceholderAddress: string = 'Station address'
  @Input()
  adminManageBikeStationAddressLabel: string = 'Address'
  @Input()
  adminManageBikeStationLongitudeLabel: string = 'Longitude'
  @Input()
  adminManageBikeStationInputPlaceholderLatitude: string = 'Latitude'
  @Input()
  imageAlt1: string = 'image'
  @Input()
  adminManageBikeStationInputPlaceholderName: string = 'Station name'
  @Input()
  adminManageBikeStationImageTitle: string = 'Station Image'
  @Input()
  adminManageBikeStationInputPlaceholderLongitude: string = 'Longitude'
  @Input()
  adminManageBikeStationLatitudeLabel: string = 'Latitude'
  @Input()
  rootClassName: string = ''
  @Input()
  imageSrc1: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  adminManageBikeStationStationNameLabel: string = 'Station Name'
  constructor() {}
}
