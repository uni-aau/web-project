import { Component, Input } from '@angular/core'

@Component({
  selector: 'button-rent-bike-component',
  templateUrl: 'button-rent-bike-component.component.html',
  styleUrls: ['button-rent-bike-component.component.css'],
})
export class ButtonRentBikeComponent {
  @Input()
  buttonRentBike: string = 'Start Bike Renting'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
