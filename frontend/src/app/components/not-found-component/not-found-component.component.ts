import {Component, Input} from '@angular/core'

@Component({
    selector: 'not-found-component',
    templateUrl: 'not-found-component.component.html',
    styleUrls: ['not-found-component.component.css'],
})
export class NotFoundComponent {
    @Input()
    notFoundSubtext: string =
        'This page could not be found, please go back to our main page!'
    @Input()
    notFoundTitle: string = '404 Not Found :('
    @Input()
    rootClassName: string = ''

    constructor() {
    }
}
