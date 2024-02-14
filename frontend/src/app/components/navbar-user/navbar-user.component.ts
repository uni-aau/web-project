import { Component, Input } from '@angular/core'

@Component({
  selector: 'navbar-user',
  templateUrl: 'navbar-user.component.html',
  styleUrls: ['navbar-user.component.css'],
})
export class NavbarUser {
  @Input()
  userNavbarLogoImageAlt: string = 'logo'
  @Input()
  userNavbarLinkRentedBikes: string = 'Active Rentals'
  @Input()
  userNavbarSettingsImageSrc: string = '/assets/no-image.svg'
  @Input()
  rootClassName: string = ''
  @Input()
  userNavbarLinkYourTickets: string = 'Your Tickets'
  @Input()
  userNavbarLinkBikeStations: string = 'Bike Stations'
  @Input()
  userNavbarLogo: string = '/assets/logo_black-1500h.png'
  @Input()
  userNavbarButtonLogout: string = 'Logout'
  @Input()
  userNavbarSettingsImageAlt: string = 'image'
  @Input()
  userNavbarLinkAbout: string = 'About'
  constructor() {}
}
