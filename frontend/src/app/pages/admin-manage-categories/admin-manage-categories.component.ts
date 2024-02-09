import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'admin-manage-categories',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'admin-manage-categories.component.html',
  styleUrls: ['admin-manage-categories.component.css'],
})
export class AdminManageCategories {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('AdminManageCategories - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'AdminManageCategories - WebProject',
      },
    ])
  }
}
