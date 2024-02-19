import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-manage-bike-station-component',
  templateUrl: 'admin-manage-bike-station-component.component.html',
  styleUrls: ['admin-manage-bike-station-component.component.css'],
})
export class AdminManageBikeStationComponent {
  @Input()
  adminManageBikeStationStationLabelDescription: string = 'Description'
  @Input()
  adminManageBikeStationStationInputPlaceholder: string =
    'Describe your station with a few words'
  @Input()
  adminManageBikeStationInputPlaceholderAddress: string = 'Station address'
  @Input()
  adminManageBikeStationLabelAddress: string = 'Address'
  @Input()
  adminManageBikeStationLabelLongitude: string = 'Longitude'
  @Input()
  adminManageBikeStationInputPlaceholderLatitude: string = 'Latitude'
  @Input()
  adminManageBikeStationInputPlaceholderName: string = 'Station Name'
  @Input()
  adminManageBikeStationImageTitle: string = 'Station Image'
  @Input()
  adminManageBikeStationInputPlaceholderLongitude: string = 'Longitude'
  @Input()
  adminManageBikeStationLabelLatitude: string = 'Latitude'
  @Input()
  rootClassName: string = ''
  @Input()
  adminManageBikeStationStationLabelName: string = 'Station Name'
  @Input()
  adminManageBikeStationLongitudeError: string = ''
  @Input()
  adminManageBikeStationLatitudeError: string = ''
  @Input()
  adminManageBikeStationDescriptionError: string = ''
  @Input()
  adminManageBikeStationAddressError: string = ''
  @Input()
  adminManageBikeStationStationNameError: string = ''
  constructor() {}
}
