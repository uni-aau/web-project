import {Routes} from '@angular/router';
import {Home} from "./pages/home/home.component";
import {Imprint} from "./pages/imprint/imprint.component";
import {DataPrivacy} from "./pages/data-privacy/data-privacy.component";
import {Login} from "./pages/login/login.component";

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'imprint', component: Imprint},
  {path: 'data-privacy', component: DataPrivacy},
  {path: 'login', component: Login},
];
