import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-navbar',
  templateUrl: 'admin-navbar.component.html',
  styleUrls: ['admin-navbar.component.css'],
})
export class AdminNavbar {
  @Input()
  imageSrc1: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  textNavbarLink31: string = 'Bike Stations'
  @Input()
  textNavbarLink4: string = 'Models'
  @Input()
  imageSrc: string = '/assets/logo_black-1500w.png'
  @Input()
  textNavbarLink2: string = 'Bikes'
  @Input()
  textNavbarLink41: string = 'User Management'
  @Input()
  textNavbarLink3: string = 'Categories'
  @Input()
  buttonAdminNavbarLogout: string = 'Logout'
  @Input()
  imageAlt: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  text: string = '<Benutzername>'
  constructor() {}
}
