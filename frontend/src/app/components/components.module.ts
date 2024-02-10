import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { AdminManageBikeRentalsComponent } from './admin-manage-bike-rentals-component/admin-manage-bike-rentals-component.component'
import { BookTicketBookingInformationComponent } from './book-ticket-booking-information-component/book-ticket-booking-information-component.component'
import { AdminManageBikeRentalsListEntry } from './admin-manage-bike-rentals-list-entry/admin-manage-bike-rentals-list-entry.component'
import { ButtonManualBikeReturn } from './button-manual-bike-return/button-manual-bike-return.component'
import { AdminModelManagement } from './admin-model-management/admin-model-management.component'
import { AdminBikesManagementComponent } from './admin-bikes-management-component/admin-bikes-management-component.component'
import { ButtonCreateComponent } from './button-create-component/button-create-component.component'
import { BikeStationsComponent } from './bike-stations-component/bike-stations-component.component'
import { ButtonSearchComponent } from './button-search-component/button-search-component.component'
import { AdminBikeStationsComponent } from './admin-bike-stations-component/admin-bike-stations-component.component'
import { AdminCategoriesManagement } from './admin-categories-management/admin-categories-management.component'
import { BookTicketRentingInformationComponent } from './book-ticket-renting-information-component/book-ticket-renting-information-component.component'
import { SearchingComponent } from './searching-component/searching-component.component'
import { BookTicketPopupComponent } from './book-ticket-popup-component/book-ticket-popup-component.component'
import { AdminUpdateBikeStationComponent } from './admin-update-bike-station-component/admin-update-bike-station-component.component'
import { HomeShowcase } from './home-showcase/home-showcase.component'
import { BookingQRCodePopupComponent } from './booking-qr-code-popup-component/booking-qr-code-popup-component.component'
import { AdminManageBikePopupComponent } from './admin-manage-bike-popup-component/admin-manage-bike-popup-component.component'
import { ModelComponent } from './model-component/model-component.component'
import { BookedTypeEntryComponent } from './booked-type-entry-component/booked-type-entry-component.component'
import { CategoryComponent } from './category-component/category-component.component'
import { ButtonUpdateDeleteComponent } from './button-update-delete-component/button-update-delete-component.component'
import { ButtonSaveDiscardComponent } from './button-save-discard-component/button-save-discard-component.component'
import { AdminBikeStationEntryComponent } from './admin-bike-station-entry-component/admin-bike-station-entry-component.component'
import { ImageUploadPreviewComponent } from './image-upload-preview-component/image-upload-preview-component.component'
import { BookingComponent } from './booking-component/booking-component.component'
import { NewReviewPopupComponent } from './new-review-popup-component/new-review-popup-component.component'
import { SecurityDropDownComponent } from './security-drop-down-component/security-drop-down-component.component'
import { BikeComponent } from './bike-component/bike-component.component'
import { AccountComponent } from './account-component/account-component.component'
import { ButtonShowQRCode } from './button-show-qr-code/button-show-qr-code.component'
import { DataPrivacyComponent } from './data-privacy-component/data-privacy-component.component'
import { ViewRatingsComponent } from './view-ratings-component/view-ratings-component.component'
import { MapComponent } from './map-component/map-component.component'
import { HomeBikes } from './home-bikes/home-bikes.component'
import { BookingTicketHistoryEntryComponent } from './booking-ticket-history-entry-component/booking-ticket-history-entry-component.component'
import { Navbar } from './navbar/navbar.component'
import { BookingTicketHistoryComponent } from './booking-ticket-history-component/booking-ticket-history-component.component'
import { BookingManageTicketsUser } from './booking-manage-tickets-user/booking-manage-tickets-user.component'
import { AdminManageModelPopupComponent } from './admin-manage-model-popup-component/admin-manage-model-popup-component.component'
import { ButtonCancelBookingComponent } from './button-cancel-booking-component/button-cancel-booking-component.component'
import { NotFoundComponent } from './not-found-component/not-found-component.component'
import { BikeStationComponent } from './bike-station-component/bike-station-component.component'
import { AdminManageBikeStationComponent } from './admin-manage-bike-station-component/admin-manage-bike-station-component.component'
import { AdminManageCategoryPopupComponent } from './admin-manage-category-popup-component/admin-manage-category-popup-component.component'
import { AdminParkingPlacesComponent } from './admin-parking-places-component/admin-parking-places-component.component'
import { RatingComponent } from './rating-component/rating-component.component'
import { NavbarUser } from './navbar-user/navbar-user.component'
import { BookingActiveTicketsComponent } from './booking-active-tickets-component/booking-active-tickets-component.component'
import { RegisterComponent } from './register-component/register-component.component'
import { WalletAccountDropDownComponent } from './wallet-account-drop-down-component/wallet-account-drop-down-component.component'
import { LoginRegisterImageComponent } from './login-register-image-component/login-register-image-component.component'
import { ImprintComponent } from './imprint-component/imprint-component.component'
import { ButtonBookComponent } from './button-book-component/button-book-component.component'
import { LoginComponent } from './login-component/login-component.component'
import { AdminNavbar } from './admin-navbar/admin-navbar.component'
import { UserAccountDropDownComponent } from './user-account-drop-down-component/user-account-drop-down-component.component'
import { ResetPasswordComponent } from './reset-password-component/reset-password-component.component'
import { AdminParkingPlaceSelectionComponent } from './admin-parking-place-selection-component/admin-parking-place-selection-component.component'
import { Footer } from './footer/footer.component'
import { DialogPopupComponent } from './dialog-popup-component/dialog-popup-component.component'

@NgModule({
  declarations: [
    AdminManageBikeRentalsComponent,
    BookTicketBookingInformationComponent,
    AdminManageBikeRentalsListEntry,
    ButtonManualBikeReturn,
    AdminModelManagement,
    AdminBikesManagementComponent,
    ButtonCreateComponent,
    BikeStationsComponent,
    ButtonSearchComponent,
    AdminBikeStationsComponent,
    AdminCategoriesManagement,
    BookTicketRentingInformationComponent,
    SearchingComponent,
    BookTicketPopupComponent,
    AdminUpdateBikeStationComponent,
    HomeShowcase,
    BookingQRCodePopupComponent,
    AdminManageBikePopupComponent,
    ModelComponent,
    BookedTypeEntryComponent,
    CategoryComponent,
    ButtonUpdateDeleteComponent,
    ButtonSaveDiscardComponent,
    AdminBikeStationEntryComponent,
    ImageUploadPreviewComponent,
    BookingComponent,
    NewReviewPopupComponent,
    SecurityDropDownComponent,
    BikeComponent,
    AccountComponent,
    ButtonShowQRCode,
    DataPrivacyComponent,
    ViewRatingsComponent,
    MapComponent,
    HomeBikes,
    BookingTicketHistoryEntryComponent,
    Navbar,
    BookingTicketHistoryComponent,
    BookingManageTicketsUser,
    AdminManageModelPopupComponent,
    ButtonCancelBookingComponent,
    NotFoundComponent,
    BikeStationComponent,
    AdminManageBikeStationComponent,
    AdminManageCategoryPopupComponent,
    AdminParkingPlacesComponent,
    RatingComponent,
    NavbarUser,
    BookingActiveTicketsComponent,
    RegisterComponent,
    WalletAccountDropDownComponent,
    LoginRegisterImageComponent,
    ImprintComponent,
    ButtonBookComponent,
    LoginComponent,
    AdminNavbar,
    UserAccountDropDownComponent,
    ResetPasswordComponent,
    AdminParkingPlaceSelectionComponent,
    Footer,
    DialogPopupComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AdminManageBikeRentalsComponent,
    BookTicketBookingInformationComponent,
    AdminManageBikeRentalsListEntry,
    ButtonManualBikeReturn,
    AdminModelManagement,
    AdminBikesManagementComponent,
    ButtonCreateComponent,
    BikeStationsComponent,
    ButtonSearchComponent,
    AdminBikeStationsComponent,
    AdminCategoriesManagement,
    BookTicketRentingInformationComponent,
    SearchingComponent,
    BookTicketPopupComponent,
    AdminUpdateBikeStationComponent,
    HomeShowcase,
    BookingQRCodePopupComponent,
    AdminManageBikePopupComponent,
    ModelComponent,
    BookedTypeEntryComponent,
    CategoryComponent,
    ButtonUpdateDeleteComponent,
    ButtonSaveDiscardComponent,
    AdminBikeStationEntryComponent,
    ImageUploadPreviewComponent,
    BookingComponent,
    NewReviewPopupComponent,
    SecurityDropDownComponent,
    BikeComponent,
    AccountComponent,
    ButtonShowQRCode,
    DataPrivacyComponent,
    ViewRatingsComponent,
    MapComponent,
    HomeBikes,
    BookingTicketHistoryEntryComponent,
    Navbar,
    BookingTicketHistoryComponent,
    BookingManageTicketsUser,
    AdminManageModelPopupComponent,
    ButtonCancelBookingComponent,
    NotFoundComponent,
    BikeStationComponent,
    AdminManageBikeStationComponent,
    AdminManageCategoryPopupComponent,
    AdminParkingPlacesComponent,
    RatingComponent,
    NavbarUser,
    BookingActiveTicketsComponent,
    RegisterComponent,
    WalletAccountDropDownComponent,
    LoginRegisterImageComponent,
    ImprintComponent,
    ButtonBookComponent,
    LoginComponent,
    AdminNavbar,
    UserAccountDropDownComponent,
    ResetPasswordComponent,
    AdminParkingPlaceSelectionComponent,
    Footer,
    DialogPopupComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
