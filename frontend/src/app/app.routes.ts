import { Routes } from '@angular/router';
import {Home} from "./pages/home/home.component";
import { ImprintComponent } from './components/imprint-component/imprint-component.component';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'imprint', component: ImprintComponent},
];

/* Example Routes (Ex3 blatt-9)
export const routes: Routes = [
    {path: 'product/:id', component: ProductDetailComponent},
    {path: 'product', component: ProductDetailComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'about', component: AboutComponent},
];
 */
