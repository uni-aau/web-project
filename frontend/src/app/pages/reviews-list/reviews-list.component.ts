import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'reviews-list',
  standalone: true,
    imports: [ComponentsModule, NgIf],
  templateUrl: 'reviews-list.component.html',
  styleUrls: ['reviews-list.component.css'],
})
export class ReviewsList {
  constructor(private title: Title, private meta: Meta, public AuthService: AuthService) {
    this.title.setTitle('ReviewsList - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ReviewsList - WebProject',
      },
    ])
  }
}
