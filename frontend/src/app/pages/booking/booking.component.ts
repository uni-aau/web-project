import {Component} from '@angular/core'
import {Meta, Title} from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-booking',
    standalone: true,
    imports: [ComponentsModule, NgIf],
    templateUrl: 'booking.component.html',
    styleUrls: ['booking.component.css'],
})
export class Booking {
    constructor(private title: Title, private meta: Meta, public AuthService: AuthService) {
        this.title.setTitle('Booking - WebProject')
        this.meta.addTags([
            {
                property: 'og:title',
                content: 'Booking - WebProject',
            },
        ])
    }
}
