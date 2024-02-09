import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'reviews-list',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'reviews-list.component.html',
  styleUrls: ['reviews-list.component.css'],
})
export class ReviewsList {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ReviewsList - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ReviewsList - WebProject',
      },
    ])
  }
}
