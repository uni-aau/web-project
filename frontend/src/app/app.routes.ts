import {Routes} from '@angular/router';
import {Home} from "./pages/home/home.component";
import {Imprint} from "./pages/imprint/imprint.component";
import {DataPrivacy} from "./pages/data-privacy/data-privacy.component";
import {Login} from "./pages/login/login.component";
import {Register} from "./pages/register/register.component";
import {NotFound} from "./pages/not-found/not-found.component";
import {Account} from "./pages/account/account.component";
import {ResetPassword} from "./pages/reset-password/reset-password.component";
import {Testpage} from "./pages/testpage/testpage.component";
import {BikeStations} from "./pages/bike-stations/bike-stations.component";
import {AdminBikeStations} from "./pages/admin-bike-stations/admin-bike-stations.component";
import {AdminManageBikeRentals} from "./pages/admin-manage-bike-rentals/admin-manage-bike-rentals.component";
import {AdminManageBikeStation} from "./pages/admin-manage-bike-station/admin-manage-bike-station.component";
import {AdminManageCategories} from "./pages/admin-manage-categories/admin-manage-categories.component";
import {AdminManageModels} from "./pages/admin-manage-models/admin-manage-models.component";
import {Booking} from "./pages/booking/booking.component";
import {ManageTicketsUser} from "./pages/manage-tickets-user/manage-tickets-user.component";
import {ReviewsList} from "./pages/reviews-list/reviews-list.component";
import {AdminManageBikes} from "./pages/admin-manage-bikes/admin-manage-bikes.component";
import {ActiveRentals} from "./pages/active-rentals/active-rentals.component";
import {Unauthorized} from "./pages/unauthorized/unauthorized.component";
import {RoleGuard} from './role.guard';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'account', component: Account, canActivate: [RoleGuard], data: {requiredRole: ['admin', 'user']}},
  {path: 'active-rentals', component: ActiveRentals, canActivate: [RoleGuard], data: {requiredRole: ['user']}},
  {
    path: 'admin-bike-stations',
    component: AdminBikeStations,
    canActivate: [RoleGuard],
    data: {requiredRole: ['admin']}
  },
  {
    path: 'admin-manage-bike-rentals',
    component: AdminManageBikeRentals,
    canActivate: [RoleGuard],
    data: {requiredRole: ['admin']}
  },
  {
    path: 'admin-manage-bike-station',
    component: AdminManageBikeStation,
    canActivate: [RoleGuard],
    data: {requiredRole: ['admin']}
  },
  {
    path: 'admin-manage-categories',
    component: AdminManageCategories,
    canActivate: [RoleGuard],
    data: {requiredRole: ['admin']}
  },
  {path: 'admin-manage-bikes', component: AdminManageBikes, canActivate: [RoleGuard], data: {requiredRole: ['admin']}},
  {
    path: 'admin-manage-models',
    component: AdminManageModels,
    canActivate: [RoleGuard],
    data: {requiredRole: ['admin']}
  },
  {path: 'bike-stations', component: BikeStations, canActivate: [RoleGuard], data: {requiredRole: ['user', 'guest']}},
  {path: 'booking', component: Booking, canActivate: [RoleGuard], data: {requiredRole: ['user', 'guest']}},
  {path: 'data-privacy', component: DataPrivacy},
  {path: 'home', component: Home},
  {path: 'imprint', component: Imprint},
  {path: 'login', component: Login},
  {path: 'manage-tickets-user', component: ManageTicketsUser, canActivate: [RoleGuard], data: {requiredRole: ['user']}},
  {path: 'register', component: Register},
  {path: 'reset-password', component: ResetPassword},
  {path: 'bike-station/reviews', component: ReviewsList},
  {path: 'testpage', component: Testpage},
  {path: 'unauthorized', component: Unauthorized},


  {path: '**', component: NotFound},
];
