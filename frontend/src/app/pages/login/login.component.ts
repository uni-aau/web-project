import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class Login {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Login - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Login - WebProject',
      },
    ])
  }


}
