import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'active-rentals',
  standalone: true,
    imports: [ComponentsModule, NgIf],
  templateUrl: 'active-rentals.component.html',
  styleUrls: ['active-rentals.component.css'],
})
export class ActiveRentals {
  constructor(private title: Title, private meta: Meta, public AuthService: AuthService) {
    this.title.setTitle('ActiveRentals - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ActiveRentals - WebProject',
      },
    ])
  }
}
