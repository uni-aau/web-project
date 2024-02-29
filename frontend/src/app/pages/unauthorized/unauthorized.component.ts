import {Component} from '@angular/core'
import {Meta, Title} from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [ComponentsModule, NgIf],
  templateUrl: 'unauthorized.component.html',
  styleUrls: ['unauthorized.component.css'],
})
export class Unauthorized {
  constructor(private title: Title, private meta: Meta, public AuthService: AuthService) {
    this.title.setTitle('Unauthorized - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Unauthorized - WebProject',
      },
    ])
  }
}
