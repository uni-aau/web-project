import {Component} from '@angular/core'
import {Meta, Title} from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'reviews-list',
    standalone: true,
    imports: [ComponentsModule, NgIf],
    templateUrl: 'reviews-list.component.html',
    styleUrls: ['reviews-list.component.css'],
})
export class ReviewsList {
    constructor(private title: Title, private meta: Meta, public AuthService: AuthService, private router: Router) {
        this.title.setTitle('ReviewsList - WebProject')
        this.meta.addTags([
            {
                property: 'og:title',
                content: 'ReviewsList - WebProject',
            },
        ])
    }
}
