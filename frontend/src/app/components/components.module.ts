import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'

import {HomeShowcase} from './home-showcase/home-showcase.component'
import {HomeBikes} from './home-bikes/home-bikes.component'
import {Navbar} from './navbar/navbar.component'
import {Footer} from './footer/footer.component'
import {ImprintComponent} from './imprint-component/imprint-component.component'
import {DataPrivacyComponent} from './data-privacy-component/data-privacy-component.component'
import {LoginComponent} from "./login-component/login-component.component";
import {LoginRegisterImageComponent} from "./login-register-image-component/login-register-image-component.component";
import {RegisterComponent} from "./register-component/register-component.component";
import {NotFoundComponent} from "./not-found-component/not-found-component.component";
import {
  UserAccountDropDownComponent
} from "./user-account-drop-down-component/user-account-drop-down-component.component";
import {AccountComponent} from "./account-component/account-component.component";
import {
  WalletAccountDropDownComponent
} from "./wallet-account-drop-down-component/wallet-account-drop-down-component.component";
import {SecurityDropDownComponent} from "./security-drop-down-component/security-drop-down-component.component";
import {ResetPasswordComponent} from "./reset-password-component/reset-password-component.component";
import {NewReviewComponent} from "./new-review-component/new-review-component.component";
import {BikeStationComponent} from "./bike-station-component/bike-station-component.component";
import {BikeComponent} from "./bike-component/bike-component.component";
import {MapComponent} from "./map-component/map-component.component";
import {BikeStationSearchComponent} from "./bike-station-search-component/bike-station-search-component.component";
import {
  BikeStationBikeSearchComponent
} from "./bike-station-bike-search-component/bike-station-bike-search-component.component";
import {AdminNavbar} from "./admin-navbar/admin-navbar.component";
import {AdminBikeStationComponent} from "./admin-bike-station-component/admin-bike-station-component.component";
import {
  AdminBikeStationSearchComponent
} from "./admin-bike-station-search-component/admin-bike-station-search-component.component";
import {RatingComponent} from "./rating-component/rating-component.component";

@NgModule({
  declarations: [AccountComponent, BikeComponent, BikeStationBikeSearchComponent, BikeStationComponent, BikeStationSearchComponent, DataPrivacyComponent, Footer, HomeBikes, HomeShowcase, ImprintComponent, LoginComponent, LoginRegisterImageComponent, MapComponent, Navbar, NewReviewComponent, NotFoundComponent, RegisterComponent, ResetPasswordComponent, SecurityDropDownComponent, UserAccountDropDownComponent, WalletAccountDropDownComponent, AdminNavbar, AdminBikeStationComponent, AdminBikeStationSearchComponent, RatingComponent],
  imports: [CommonModule, RouterModule],
  exports: [AccountComponent, BikeComponent, BikeStationBikeSearchComponent, BikeStationComponent, BikeStationSearchComponent, DataPrivacyComponent, Footer, HomeBikes, HomeShowcase, ImprintComponent, LoginComponent, LoginRegisterImageComponent, MapComponent, Navbar, NewReviewComponent, NotFoundComponent, RegisterComponent, ResetPasswordComponent, SecurityDropDownComponent, UserAccountDropDownComponent, WalletAccountDropDownComponent, AdminNavbar, AdminBikeStationComponent, AdminBikeStationSearchComponent, NewReviewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {
}
