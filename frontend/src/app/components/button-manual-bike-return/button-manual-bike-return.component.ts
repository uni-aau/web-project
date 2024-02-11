import { Component, Input } from '@angular/core'

@Component({
  selector: 'button-manual-bike-return',
  templateUrl: 'button-manual-bike-return.component.html',
  styleUrls: ['button-manual-bike-return.component.css'],
})
export class ButtonManualBikeReturn {
  @Input()
  adminBikeRentalsButtonReturnBikeManually: string = 'Return Bike'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
