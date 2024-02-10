import {Component} from '@angular/core'
import {Meta, Title} from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css'],
})
export class Account {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Account - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Account - WebProject',
      },
    ])
  }
}
