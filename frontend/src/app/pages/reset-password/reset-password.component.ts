import {Component} from '@angular/core'
import {Meta, Title} from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'reset-password',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'reset-password.component.html',
  styleUrls: ['reset-password.component.css'],
})
export class ResetPassword {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ResetPassword - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ResetPassword - WebProject',
      },
    ])
  }
}
