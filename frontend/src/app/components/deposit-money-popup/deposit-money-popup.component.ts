import {Component, Input} from '@angular/core'
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'deposit-money-popup',
  templateUrl: 'deposit-money-popup.component.html',
  styleUrls: ['deposit-money-popup.component.css'],
})
export class DepositMoneyPopup {
  @Input()
  depositMoneyTitle: string = 'Deposit Money'
  @Input()
  depositMoneyText: string = 'Specify how much money you want to deposit'
  @Input()
  depositMoneyInputPlaceholder: string = 'Insert money amount'
  @Input()
  depositMoneyError: string = ''

  constructor(public dialogRef: MatDialogRef<DepositMoneyPopup>) {
  }

  handleConfirm(value: string) {
    if (!(/^[0-9]+$/.test(value))) {
      this.depositMoneyError = "No illegal characters allowed";
      return;
    }

    let valueNumber = parseFloat(value);
    if (valueNumber >= 20000) {
      this.depositMoneyError = "Amount must be under 20.000";
      return;
    }

    this.depositMoneyError = '';
    this.dialogRef.close(valueNumber);
  }

  handleCancel() {
    this.dialogRef.close(0)
  }
}
