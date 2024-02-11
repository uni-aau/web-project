import { Component, Input } from '@angular/core'

@Component({
  selector: 'admin-navbar',
  templateUrl: 'admin-navbar.component.html',
  styleUrls: ['admin-navbar.component.css'],
})
export class AdminNavbar {
  @Input()
  adminNavbarLogoAlt: string = 'image'
  @Input()
  adminNavbarSettingsImage: string = '/assets/no-image.svg'
  @Input()
  adminNavbarLinkBikeStations: string = 'Bike Stations'
  @Input()
  adminNavbarLinkModels: string = 'Models'
  @Input()
  adminNavbarLogo: string = '/assets/logo_black-1500h.png'
  @Input()
  adminNavbarLinkBikes: string = 'Bikes'
  @Input()
  adminNavbarLinkActiveTickets: string = 'Tickets Management'
  @Input()
  adminNavbarLinkCategories: string = 'Categories'
  @Input()
  adminNavbarButtonLogout: string = 'Logout'
  @Input()
  adminNavbarSettingsImageAlt: string = 'image'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
