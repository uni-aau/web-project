import {Component} from '@angular/core'
import {Meta, Title} from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
})
export class Register {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Register - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Register - WebProject',
      },
    ])
  }
}
