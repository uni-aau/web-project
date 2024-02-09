import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'admin-manage-models',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'admin-manage-models.component.html',
  styleUrls: ['admin-manage-models.component.css'],
})
export class AdminManageModels {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('AdminManageModels - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'AdminManageModels - WebProject',
      },
    ])
  }
}
