import { Component, Input } from '@angular/core'

@Component({
  selector: 'wallet-account-drop-down-component',
  templateUrl: 'wallet-account-drop-down-component.component.html',
  styleUrls: ['wallet-account-drop-down-component.component.css'],
})
export class WalletAccountDropDownComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  walletAmount: string = '(Amount: %s$)'
  @Input()
  walletDepositMoneyTitle: string = 'Deposit Money'
  @Input()
  walletDepositMoneySubtitle: string =
    'Deposit money into your account wallet to be able to buy tickets'
  @Input()
  buttonDepositMoney: string = 'Deposit Money'
  @Input()
  walletConnectWalletTitle: string = 'Connect/Remove Wallet (%s)'
  @Input()
  walletConnectWalletSubtitle: string = 'Connect or remove your wallet'
  @Input()
  buttonConnectWallet: string = 'Connect Wallet'
  @Input()
  buttonRemoveWallet1: string = 'Remove Wallet'
  constructor() {}
}
