import {Routes} from '@angular/router';
import {Home} from "./pages/home/home.component";
import {Imprint} from "./pages/imprint/imprint.component";
import {DataPrivacy} from "./pages/data-privacy/data-privacy.component";

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'imprint', component: Imprint},
  {path: 'data-privacy', component: DataPrivacy},
];

/* Example Routes (Ex3 blatt-9)
export const routes: Routes = [
    {path: 'product/:id', component: ProductDetailComponent},
    {path: 'product', component: ProductDetailComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'about', component: AboutComponent},
];
 */
