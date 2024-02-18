import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'unauthorized.component.html',
  styleUrls: ['unauthorized.component.css'],
})
export class Unauthorized {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Unauthorized - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Unauthorized - WebProject',
      },
    ])
  }
}
