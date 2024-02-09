import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-navbar',
  templateUrl: 'admin-navbar.component.html',
  styleUrls: ['admin-navbar.component.css'],
})
export class AdminNavbar {
  @Input()
  navbarSettingsImage: string = '/assets/no-image.svg'
  @Input()
  navbarLinkBikeStations: string = 'Bike Stations'
  @Input()
  navbarLinkModels: string = 'Models'
  @Input()
  navbarImage: string = '/assets/logo_black-1500h.png'
  @Input()
  imageAlt1: string = 'image'
  @Input()
  navbarLinkBikes: string = 'Bikes'
  @Input()
  imageSrc: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  navbarLinkUserManagement: string = 'User Management'
  @Input()
  navbarLinkCategories: string = 'Categories'
  @Input()
  navbarButtonLogout: string = 'Logout'
  @Input()
  imageAlt: string = 'image'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
