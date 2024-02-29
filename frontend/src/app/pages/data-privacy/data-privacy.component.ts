import {Component} from '@angular/core'
import {Meta, Title} from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'data-privacy',
  standalone: true,
  imports: [ComponentsModule, NgIf],
  templateUrl: 'data-privacy.component.html',
  styleUrls: ['data-privacy.component.css'],
})
export class DataPrivacy {
  constructor(private title: Title, private meta: Meta, public AuthService: AuthService) {
    this.title.setTitle('DataPrivacy - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'DataPrivacy - WebProject',
      },
    ])
  }
}
