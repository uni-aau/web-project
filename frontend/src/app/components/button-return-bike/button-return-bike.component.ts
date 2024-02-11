import { Component, Input } from '@angular/core'

@Component({
  selector: 'button-return-bike',
  templateUrl: 'button-return-bike.component.html',
  styleUrls: ['button-return-bike.component.css'],
})
export class ButtonReturnBike {
  @Input()
  rootClassName: string = ''
  @Input()
  buttonReturnBike: string = 'Return Bike'
  constructor() {}
}
