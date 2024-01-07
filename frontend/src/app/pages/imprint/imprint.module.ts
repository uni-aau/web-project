import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Imprint } from './imprint.component'

const routes = [
  {
    path: '',
    component: Imprint,
  },
]

@NgModule({
  declarations: [Imprint],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Imprint],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ImprintModule {}
