import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'data-privacy',
  standalone: true,
  templateUrl: 'data-privacy.component.html',
  styleUrls: ['data-privacy.component.css'],
  imports: [ComponentsModule],
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
