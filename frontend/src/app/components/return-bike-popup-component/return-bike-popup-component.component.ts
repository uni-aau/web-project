import { Component, Input } from '@angular/core'

@Component({
  selector: 'return-bike-popup-component',
  templateUrl: 'return-bike-popup-component.component.html',
  styleUrls: ['return-bike-popup-component.component.css'],
})
export class ReturnBikePopupComponent {
  @Input()
  returnBikeTicketId: string = 'Ticket ID: {0}'
  @Input()
  returnBikeParkingPlace: string = 'Parking Place: {0} [Full | Number]'
  @Input()
  returnBikeLabelBikeStation: string = 'Select Bike Station'
  @Input()
  returnBikeTitle: string = 'Return Bike'
  @Input()
  returnBikeError: string = ''
  constructor() {}
}
