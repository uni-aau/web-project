import {Component, Inject, Input} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

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

  constructor(public dialogRef: MatDialogRef<DialogPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.setDescription();
  }

  handleConfirm() {
    this.dialogRef.close(true);
  }

  handleCancel() {
    this.dialogRef.close(false);
  }

  setDescription() {
    this.dialogPopupDescription = this.data.description;
  }
}
