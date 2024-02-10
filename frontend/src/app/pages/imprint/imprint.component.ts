import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'imprint.component.html',
  styleUrls: ['imprint.component.css'],
})
export class Imprint {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Imprint - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Imprint - WebProject',
      },
    ])
  }
}
