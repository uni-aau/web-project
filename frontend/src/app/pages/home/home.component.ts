import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'home.component.html',
  styleUrl: './home.component.css'
})
export class Home {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Diligent Jam Packed Wallaby')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Diligent Jam Packed Wallaby',
      },
    ])
  }
}
