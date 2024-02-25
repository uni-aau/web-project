import {Component} from '@angular/core'
import {Meta, Title} from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ComponentsModule, NgIf],
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})
export class Home {
    constructor(private title: Title, private meta: Meta, public AuthService: AuthService) {
        this.title.setTitle('WebProject')
        this.meta.addTags([
            {
                property: 'og:title',
                content: 'WebProject',
            },
        ])
    }
}
