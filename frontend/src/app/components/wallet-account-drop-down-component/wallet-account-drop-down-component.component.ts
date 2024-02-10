import { Component, Input } from '@angular/core'

@Component({
  selector: 'wallet-account-drop-down-component',
  templateUrl: 'wallet-account-drop-down-component.component.html',
  styleUrls: ['wallet-account-drop-down-component.component.css'],
})
export class WalletAccountDropDownComponent {
  @Input()
  walletConnectWalletSubtitle: string = 'Connect or remove your wallet'
  @Input()
  walletDepositMoneySubtitle: string =
    'Deposit money into your account wallet to be able to buy tickets'
  @Input()
  buttonRemoveWallet1: string = 'Remove Wallet'
  @Input()
  walletDepositMoneyTitle: string = 'Deposit Money'
  @Input()
  buttonDepositMoney: string = 'Deposit Money'
  @Input()
  buttonConnectWallet: string = 'Connect Wallet'
  @Input()
  rootClassName: string = ''
  @Input()
  walletConnectWalletTitle: string = 'Connect/Remove Wallet (%s)'
  @Input()
  walletAmount: string = '(Current Amount: %s$)'
  constructor() {}
}
