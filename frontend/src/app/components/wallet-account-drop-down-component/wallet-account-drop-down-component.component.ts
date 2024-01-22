import { Component, Input } from '@angular/core'

@Component({
  selector: 'wallet-account-drop-down-component',
  templateUrl: 'wallet-account-drop-down-component.component.html',
  styleUrls: ['wallet-account-drop-down-component.component.css'],
})
export class WalletAccountDropDownComponent {
  @Input()
  walletConnectWalletTitle: string = 'Connect/Remove Wallet (%s)'
  @Input()
  buttonRemoveWallet1: string = 'Remove Wallet'
  @Input()
  walletConnectWalletSubtitle: string = 'Connect or remove your wallet'
  @Input()
  buttonDepositMoney: string = 'Deposit Money'
  @Input()
  walletRemoveWalletTitle: string = 'Remove Wallet'
  @Input()
  buttonRemoveWallet: string = 'Remove Wallet'
  @Input()
  rootClassName: string = ''
  @Input()
  buttonConnectWallet: string = 'Connect Wallet'
  @Input()
  walletDepositMoneyTitle: string = 'Deposit Money'
  @Input()
  walletRemoveWalletSubtitle: string =
    'Fully remove your connected wallet from the webpage'
  @Input()
  walletDepositMoneySubtitle: string =
    'Deposit money into your account wallet to be able to buy tickets'
  @Input()
  walletAmount: string = '(Amount: %s$)'
  constructor() {}
}
