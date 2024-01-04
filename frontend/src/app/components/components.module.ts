import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { HomeShowcase } from './home-showcase/home-showcase.component'
import { HomeBikes } from './home-bikes/home-bikes.component'
import { Navbar } from './navbar/navbar.component'
import { Footer } from './footer/footer.component'

@NgModule({
  declarations: [HomeShowcase, HomeBikes, Navbar, Footer],
  imports: [CommonModule, RouterModule],
  exports: [HomeShowcase, HomeBikes, Navbar, Footer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
