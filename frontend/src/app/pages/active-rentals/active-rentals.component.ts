import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'active-rentals',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'active-rentals.component.html',
  styleUrls: ['active-rentals.component.css'],
})
export class ActiveRentals {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ActiveRentals - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ActiveRentals - WebProject',
      },
    ])
  }
}
