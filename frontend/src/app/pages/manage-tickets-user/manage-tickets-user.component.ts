import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'manage-tickets-user',
  standalone: true,
    imports: [ComponentsModule, NgIf],
  templateUrl: 'manage-tickets-user.component.html',
  styleUrls: ['manage-tickets-user.component.css'],
})
export class ManageTicketsUser {
  constructor(private title: Title, private meta: Meta, public AuthService: AuthService) {
    this.title.setTitle('ManageTicketsUser - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ManageTicketsUser - WebProject',
      },
    ])
  }

}
