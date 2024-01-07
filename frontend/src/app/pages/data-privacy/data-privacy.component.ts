import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'data-privacy',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'data-privacy.component.html',
  styleUrls: ['data-privacy.component.css'],
})
export class DataPrivacy {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('DataPrivacy - Diligent Jam Packed Wallaby')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'DataPrivacy - Diligent Jam Packed Wallaby',
      },
    ])
  }
}
