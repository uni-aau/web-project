import { Component, Input } from '@angular/core'

@Component({
  selector: 'button-save-discard-component',
  templateUrl: 'button-save-discard-component.component.html',
  styleUrls: ['button-save-discard-component.component.css'],
})
export class ButtonSaveDiscardComponent {
  @Input()
  adminManageModelButtonDiscard: string = 'Discard'
  @Input()
  rootClassName: string = ''
  @Input()
  adminManageModelButtonSave: string = 'Save'
  constructor() {}
}
