import { Component, Input } from '@angular/core'

@Component({
  selector: 'dialog-popup-component',
  templateUrl: 'dialog-popup-component.component.html',
  styleUrls: ['dialog-popup-component.component.css'],
})
export class DialogPopupComponent {
  @Input()
  dialogPopupDescription: string = '{0}'
  @Input()
  dialogPopupTitle: string = 'Are you sure?'
  constructor() {}
}
