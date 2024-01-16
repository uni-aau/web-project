import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'login.component.html',
  styleUrl: './login.component.css',
})

export class Login {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Login - Diligent Jam Packed Wallaby')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Login - Diligent Jam Packed Wallaby',
      },
    ])
  }
}
