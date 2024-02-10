import { Component, Input } from '@angular/core'

@Component({
  selector: 'navbar-user',
  templateUrl: 'navbar-user.component.html',
  styleUrls: ['navbar-user.component.css'],
})
export class NavbarUser {
  @Input()
  imageSrc: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  navbarLinkBikes1: string = 'Bikes'
  @Input()
  navbarSettingsImage: string = '/assets/no-image.svg'
  @Input()
  navbarLinkBikeStations1: string = 'Bike Stations'
  @Input()
  rootClassName: string = ''
  @Input()
  navbarLinkCategories: string = 'Your Tickets'
  @Input()
  navbarLinkBikes: string = 'Bike Stations'
  @Input()
  navbarImage: string = '/assets/logo_black-1500h.png'
  @Input()
  button: string = 'Your Tickets (%s)'
  @Input()
  navbarButtonLogout: string = 'Logout'
  @Input()
  imageAlt1: string = 'image'
  @Input()
  imageAlt: string = 'image'
  @Input()
  navbarLinkModels2: string = 'Models'
  @Input()
  navbarImage1: string = '/assets/logo_black-1500h.png'
  @Input()
  navbarLinkBikeStations: string = 'About'
  @Input()
  navbarLinkUserManagement1: string = 'User Management'
  @Input()
  navbarButtonLogout1: string = 'Logout'
  @Input()
  navbarLinkModels1: string = 'Models'
  @Input()
  navbarLinkCategories1: string = 'Categories'
  @Input()
  text: string = 'Rented Bikes'
  constructor() {}
}
