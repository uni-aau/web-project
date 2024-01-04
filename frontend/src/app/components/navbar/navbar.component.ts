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
  link_navbar_link2: string = 'https://example.com'
  @Input()
  text_navbar_link3: string = 'Pricing'
  @Input()
  link_navbar_link1: string = 'https://example.com'
  @Input()
  text_navbar_link31: string = 'About'
  @Input()
  button_navbar_basket_text: string = 'Warenkorb (%s)'
  @Input()
  link_navbar_link3: string = 'https://example.com'
  @Input()
  button_navbar_login_text: string = 'Login'
  @Input()
  text_navbar_link2: string = 'Bike Stations'
  @Input()
  button_navbar_register_text: string = 'Register'
  constructor() {}
}
