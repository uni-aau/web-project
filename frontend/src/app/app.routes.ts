import { Routes } from '@angular/router';
import {Home} from "./pages/home/home.component";

export const routes: Routes = [
  {path: '', component: Home},
];

/* Example Routes (Ex3 blatt-9)
export const routes: Routes = [
    {path: 'product/:id', component: ProductDetailComponent},
    {path: 'product', component: ProductDetailComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'about', component: AboutComponent},
];
 */
