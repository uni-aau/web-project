import {Component, EventEmitter, Input, Output} from '@angular/core'
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'button-assign-update-delete-component',
    templateUrl: 'button-assign-update-delete-component.component.html',
    styleUrls: ['button-assign-update-delete-component.component.css'],
})
export class ButtonAssignUpdateDeleteComponent {
    @Input()
    buttonAssign: string = 'Assign Bike'
    @Input()
    rootClassName: string = ''

    @Output() buttonClicked: EventEmitter<string> = new EventEmitter();

    constructor(public AuthService: AuthService) {
    }

    handleButtonClicked(event: string) {
        this.buttonClicked.emit(event);
    }

}
