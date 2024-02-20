import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
  selector: 'button-update-delete-component',
  templateUrl: 'button-update-delete-component.component.html',
  styleUrls: ['button-update-delete-component.component.css'],
})
export class ButtonUpdateDeleteComponent {
  @Input()
  adminCategoryButtonDelete: string = 'Delete'
  @Input()
  rootClassName: string = ''
  @Input()
  adminCategoryButtonUpdate: string = 'Update'

  @Output() buttonClicked:EventEmitter<string> = new EventEmitter();
  constructor() {}

  updateButtonClicked() {
    this.buttonClicked.emit('update');
  }

  deleteButtonClicked() {
    this.buttonClicked.emit('delete');
  }
}
