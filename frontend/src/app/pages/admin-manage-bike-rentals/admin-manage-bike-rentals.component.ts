import {Component} from '@angular/core'
import {Meta, Title} from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'admin-manage-bike-rentals',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'admin-manage-bike-rentals.component.html',
  styleUrls: ['admin-manage-bike-rentals.component.css'],
})
export class AdminManageBikeRentals {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('AdminManageBikeRentals - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'AdminManageBikeRentals - WebProject',
      },
    ])
  }
}
