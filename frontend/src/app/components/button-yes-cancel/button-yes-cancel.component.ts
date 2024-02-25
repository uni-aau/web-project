import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
    selector: 'button-yes-cancel',
    templateUrl: 'button-yes-cancel.component.html',
    styleUrls: ['button-yes-cancel.component.css'],
})
export class ButtonYesCancel {
    @Input()
    dialogPopupButtonYes: string = 'Confirm'
    @Input()
    dialogPopupButtonAbort: string = 'Cancel'
    @Input()
    rootClassName: string = ''

    @Output() confirm = new EventEmitter<void>();
    @Output() cancel = new EventEmitter<void>();

    constructor() {
    }

    onConfirm() {
        this.confirm.emit();
    }

    onCancel() {
        this.cancel.emit();
    }
}
