import {Component, Input} from '@angular/core'

@Component({
  selector: 'button-show-qr-code',
  templateUrl: 'button-show-qr-code.component.html',
  styleUrls: ['button-show-qr-code.component.css'],
})
export class ButtonShowQRCode {
  @Input()
  showQRCodeButton: string = 'QR Code'
  @Input()
  rootClassName: string = ''

  constructor() {
  }
}
