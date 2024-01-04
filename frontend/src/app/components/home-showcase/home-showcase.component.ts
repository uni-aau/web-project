import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-showcase',
  templateUrl: 'home-showcase.component.html',
  styleUrls: ['home-showcase.component.css'],
})
export class HomeShowcase {
  @Input()
  text_home_showcase: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere sapien nibh, quis maximus libero faucibus non.'
  @Input()
  image_alt_home_showcase: string = 'image'
  @Input()
  title_home_showcase: string = 'Pedal Paradise'
  @Input()
  rootClassName: string = ''
  @Input()
  image_src_home_showcase: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  heading_home_showcase: string =
    'Bike Rental mit geringen Kosten und langem Fahren'
  @Input()
  button_text_home_showcase: string = '>> Rent Now'
  constructor() {}
}
