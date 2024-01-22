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
  textNavbarLink3: string = 'Pricing'
  @Input()
  textNavbarLink31: string = 'About'
  @Input()
  buttonNavbarBasketText: string = 'Warenkorb (%s)'
  @Input()
  imageSrc: string = '/assets/logo_black.png'
  @Input()
  buttonNavbarLoginText: string = 'Login'
  @Input()
  textNavbarLink2: string = 'Bike Stations'
  @Input()
  buttonNavbarRegisterText: string = 'Register'
  constructor() {}
}
