import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'WebProject',
      },
    ])
  }
}
