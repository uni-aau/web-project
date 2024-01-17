import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { HomeShowcase } from './home-showcase/home-showcase.component'
import { HomeBikes } from './home-bikes/home-bikes.component'
import { Navbar } from './navbar/navbar.component'
import { Footer } from './footer/footer.component'
import { ImprintComponent } from './imprint-component/imprint-component.component'
import { DataPrivacyComponent } from './data-privacy-component/data-privacy-component.component'
import {LoginComponent} from "./login-component/login-component.component";
import {LoginRegisterImageComponent} from "./login-register-image-component/login-register-image-component.component";
import {RegisterComponent} from "./register-component/register-component.component";
import {NotFoundComponent} from "./not-found-component/not-found-component.component";
import {
  UserAccountDropDownComponent
} from "./user-account-drop-down-component/user-account-drop-down-component.component";
import {AccountComponent} from "./account-component/account-component.component";
import {
  UserAccountDropDownComponentNew
} from "./user-account-drop-down-component-new/user-account-drop-down-component-new.component";

@NgModule({
  declarations: [HomeShowcase, HomeBikes, Navbar, Footer, ImprintComponent, DataPrivacyComponent, LoginComponent, LoginRegisterImageComponent, RegisterComponent, NotFoundComponent, UserAccountDropDownComponent, AccountComponent, UserAccountDropDownComponentNew],
  imports: [CommonModule, RouterModule],
  exports: [HomeShowcase, HomeBikes, Navbar, Footer, ImprintComponent, DataPrivacyComponent, LoginComponent, RegisterComponent, NotFoundComponent, UserAccountDropDownComponent, AccountComponent, UserAccountDropDownComponentNew],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}