import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-showcase',
  templateUrl: 'home-showcase.component.html',
  styleUrls: ['home-showcase.component.css'],
})
export class HomeShowcase {
  @Input()
  textHomeShowcase: string =
    'Explore our wide range of bikes, from sleek road models to rugged mountain options, innovative e-bikes, and many more! All designed to offer an unmatched cycling experience for every adventurer.'
  @Input()
  imageAltHomeShowcase: string = 'image'
  @Input()
  titleHomeShowcase: string = 'Pedal Paradise'
  @Input()
  rootClassName: string = ''
  @Input()
  imageSrcHomeShowcase: string = '/assets/bikestation-1500w.png'
  @Input()
  headingHomeShowcase: string = 'Your gateway to adventure on two wheels'
  @Input()
  buttonTextHomeShowcase: string = '>> Rent Now'
  constructor() {}
}
