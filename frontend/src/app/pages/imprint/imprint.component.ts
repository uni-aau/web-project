import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-imprint',
  templateUrl: 'imprint.component.html',
  styleUrls: ['imprint.component.css'],
})
export class Imprint {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Imprint - Diligent Jam Packed Wallaby')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Imprint - Diligent Jam Packed Wallaby',
      },
    ])
  }
}
