import { Component, Input } from '@angular/core'

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
  constructor() {}
}
