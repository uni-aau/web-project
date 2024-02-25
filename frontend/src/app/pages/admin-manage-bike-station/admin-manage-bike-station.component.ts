import {Component} from '@angular/core'
import {Meta, Title} from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
    selector: 'admin-manage-bike-station',
    standalone: true,
    imports: [ComponentsModule],
    templateUrl: 'admin-manage-bike-station.component.html',
    styleUrls: ['admin-manage-bike-station.component.css'],
})
export class AdminManageBikeStation {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('AdminManageBikeStation - WebProject')
        this.meta.addTags([
            {
                property: 'og:title',
                content: 'AdminManageBikeStation - WebProject',
            },
        ])
    }

    onSave($event: any) {

    }
}
