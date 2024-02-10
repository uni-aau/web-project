import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'not-found',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'not-found.component.html',
  styleUrls: ['not-found.component.css'],
})
export class NotFound {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('NotFound - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'NotFound - WebProject',
      },
    ])
  }
}
