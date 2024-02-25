import {Component, Input} from '@angular/core'

@Component({
    selector: 'login-register-image-component',
    templateUrl: 'login-register-image-component.component.html',
    styleUrls: ['login-register-image-component.component.css'],
})
export class LoginRegisterImageComponent {
    @Input()
    imageSrc: string = '/assets/logo_black-200h.png'
    @Input()
    rootClassName: string = ''
    @Input()
    imageAlt: string = 'image'

    constructor() {
    }
}
