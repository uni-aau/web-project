import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { HomeShowcase } from './home-showcase/home-showcase.component'
import { HomeBikes } from './home-bikes/home-bikes.component'
import { Navbar } from './navbar/navbar.component'
import { Footer } from './footer/footer.component'
import { ImprintComponent } from './imprint-component/imprint-component.component'

@NgModule({
  declarations: [HomeShowcase, HomeBikes, Navbar, Footer, ImprintComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeShowcase, HomeBikes, Navbar, Footer, ImprintComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
