import {Component} from '@angular/core'
import {Meta, Title} from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'bike-stations',
    standalone: true,
    imports: [ComponentsModule, NgIf],
    templateUrl: 'bike-stations.component.html',
    styleUrls: ['bike-stations.component.css'],
})
export class BikeStations {
    constructor(private title: Title, private meta: Meta, public AuthService: AuthService) {
        this.title.setTitle('BikeStations - WebProject')
        this.meta.addTags([
            {
                property: 'og:title',
                content: 'BikeStations - WebProject',
            },
        ])
    }
}
