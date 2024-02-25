import {Component, Input} from '@angular/core'

@Component({
    selector: 'account-settings-component',
    templateUrl: 'account-settings-component.component.html',
    styleUrls: ['account-settings-component.component.css'],
})
export class AccountSettingsComponent {
    @Input()
    rootClassName: string = ''

    constructor() {
    }
}
