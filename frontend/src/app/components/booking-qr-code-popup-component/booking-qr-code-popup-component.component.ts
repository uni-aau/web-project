import { Component, Input } from '@angular/core'

@Component({
  selector: 'booking-qr-code-popup-component',
  templateUrl: 'booking-qr-code-popup-component.component.html',
  styleUrls: ['booking-qr-code-popup-component.component.css'],
})
export class BookingQRCodePopupComponent {
  @Input()
  imageAlt: string = 'image'
  @Input()
  imageSrc: string = '/assets/qr-1200h.png'
  constructor() {}
}
