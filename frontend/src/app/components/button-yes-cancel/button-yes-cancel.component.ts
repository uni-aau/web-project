import { Component, Input } from '@angular/core'

@Component({
  selector: 'button-yes-cancel',
  templateUrl: 'button-yes-cancel.component.html',
  styleUrls: ['button-yes-cancel.component.css'],
})
export class ButtonYesCancel {
  @Input()
  dialogPopupButtonYes: string = 'Yes'
  @Input()
  dialogPopupButtonAbort: string = 'Cancel'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
