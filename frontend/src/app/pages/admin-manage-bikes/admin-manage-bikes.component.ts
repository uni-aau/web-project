import {Component} from '@angular/core'
import {Meta, Title} from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";

@Component({
    selector: 'admin-manage-bikes',
    standalone: true,
    imports: [ComponentsModule],
    templateUrl: 'admin-manage-bikes.component.html',
    styleUrls: ['admin-manage-bikes.component.css'],
})
export class AdminManageBikes {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('AdminManageBikes - WebProject')
        this.meta.addTags([
            {
                property: 'og:title',
                content: 'AdminManageBikes - WebProject',
            },
        ])
    }
}
