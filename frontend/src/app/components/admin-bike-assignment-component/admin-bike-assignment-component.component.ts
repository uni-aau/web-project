import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-bike-assignment-component',
  templateUrl: 'admin-bike-assignment-component.component.html',
  styleUrls: ['admin-bike-assignment-component.component.css'],
})
export class AdminBikeAssignmentComponent {
  @Input()
  adminAssignBikeBikeModel: string = 'Bike Model: {0}'
  @Input()
  rootClassName: string = ''
  @Input()
  adminAssignBikeBikeCategories: string = 'Bike Category: {0}'
  @Input()
  adminAssignBikeParkingPlace: string = 'Parking Place: {0} [Full | Number]'
  @Input()
  adminAssignBikeSelectorLabel: string = 'Assign Bike Station'
  @Input()
  adminAssignBikeTitle: string = 'Assign Bike'
  @Input()
  adminAssignBikeErrorText: string = ''
  constructor() {}
}
