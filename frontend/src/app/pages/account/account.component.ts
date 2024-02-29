import {Component} from '@angular/core'
import {Meta, Title} from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";
import {AuthService} from "../../services/auth.service"
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ComponentsModule, NgIf],
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css'],
})
export class Account {
  constructor(private title: Title, private meta: Meta, public AuthService: AuthService) {
    this.title.setTitle('Account - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Account - WebProject',
      },
    ])
  }
}
