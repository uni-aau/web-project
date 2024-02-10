import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'booking.component.html',
  styleUrls: ['booking.component.css'],
})
export class Booking {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Booking - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Booking - WebProject',
      },
    ])
  }
}
