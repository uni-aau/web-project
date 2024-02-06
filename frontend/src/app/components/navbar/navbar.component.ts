import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class Navbar {
  @Input()
  rootClassName: string = ''
  @Input()
  navbarLinkPricing: string = 'Pricing'
  @Input()
  navbarLinkAbout: string = 'About'
  @Input()
  navbarButtonBasket: string = 'Warenkorb (%s)'
  @Input()
  imageSrc: string = '/assets/logo_black.png'
  @Input()
  navbarButtonLogin: string = 'Login'
  @Input()
  navbarLinkBikeStations: string = 'Bike Stations'
  @Input()
  navbarButtonRegister: string = 'Register'
  constructor() {}
}
