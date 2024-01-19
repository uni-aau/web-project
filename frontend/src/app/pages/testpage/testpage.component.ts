import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'app-testpage',
  imports: [ComponentsModule],
  standalone: true,
  templateUrl: 'testpage.component.html',
  styleUrls: ['testpage.component.css'],
})
export class Testpage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Testpage - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Testpage - WebProject',
      },
    ])
  }
}
