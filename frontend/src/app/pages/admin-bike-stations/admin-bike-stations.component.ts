import {Component} from '@angular/core'
import {Meta, Title} from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
    selector: 'admin-bike-stations',
    standalone: true,
    imports: [ComponentsModule],
    templateUrl: 'admin-bike-stations.component.html',
    styleUrls: ['admin-bike-stations.component.css'],
})
export class AdminBikeStations {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('AdminBikeStations - WebProject')
        this.meta.addTags([
            {
                property: 'og:title',
                content: 'AdminBikeStations - WebProject',
            },
        ])
    }
}
