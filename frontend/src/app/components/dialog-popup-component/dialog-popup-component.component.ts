import { Component, Input } from '@angular/core'

@Component({
  selector: 'dialog-popup-component',
  templateUrl: 'dialog-popup-component.component.html',
  styleUrls: ['dialog-popup-component.component.css'],
})
export class DialogPopupComponent {
  @Input()
  dialogPopupTitle: string = 'Are you sure?'
  @Input()
  dialogPopupDescription: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat felis tempor, maximus elit sit amet, sodales dui.'
  @Input()
  dialogPopupButtonYes: string = 'Yes'
  @Input()
  dialogPopupButtonAbort: string = 'Abort'
  constructor() {}
}
