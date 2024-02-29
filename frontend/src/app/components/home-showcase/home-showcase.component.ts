import {Component, Input} from '@angular/core'

@Component({
  selector: 'home-showcase',
  templateUrl: 'home-showcase.component.html',
  styleUrls: ['home-showcase.component.css'],
})
export class HomeShowcase {
  @Input()
  homeShowcaseText: string =
    'Explore our wide range of bikes, from sleek road models to rugged mountain options, innovative e-bikes, and many more! All designed to offer an unmatched cycling experience for every adventurer.'
  @Input()
  homeShowcaseImageAlt: string = 'image'
  @Input()
  homeShowcaseTitle: string = 'Pedal Paradise'
  @Input()
  rootClassName: string = ''
  @Input()
  homeShowcaseImageSrc: string = '/assets/bikestation-1500w.png'
  @Input()
  homeShowcaseHeading: string = 'Your gateway to adventure on two wheels'
  @Input()
  homeShowcaseButtonRentNow: string = '>> Rent Now'

  constructor() {
  }
}
