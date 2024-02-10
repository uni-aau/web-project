import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'manage-tickets-user',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'manage-tickets-user.component.html',
  styleUrls: ['manage-tickets-user.component.css'],
})
export class ManageTicketsUser {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ManageTicketsUser - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ManageTicketsUser - WebProject',
      },
    ])
  }
}
