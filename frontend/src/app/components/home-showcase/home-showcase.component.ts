import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-showcase',
  templateUrl: 'home-showcase.component.html',
  styleUrls: ['home-showcase.component.css'],
})
export class HomeShowcase {
  @Input()
  textHomeShowcase: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere sapien nibh, quis maximus libero faucibus non.'
  @Input()
  imageAltHomeShowcase: string = 'image'
  @Input()
  titleHomeShowcase: string = 'Pedal Paradise'
  @Input()
  rootClassName: string = ''
  @Input()
  imageSrcHomeShowcase: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  headingHomeShowcase: string =
    'Bike Rental mit geringen Kosten und langem Fahren'
  @Input()
  buttonTextHomeShowcase: string = '>> Rent Now'
  constructor() {}
}
