import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
  selector: 'bike-stations',
  imports: [ComponentsModule],
  standalone: true,
  templateUrl: 'bike-stations.component.html',
  styleUrls: ['bike-stations.component.css'],
})
export class BikeStations {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('BikeStations - WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'BikeStations - WebProject',
      },
    ])
  }
}
