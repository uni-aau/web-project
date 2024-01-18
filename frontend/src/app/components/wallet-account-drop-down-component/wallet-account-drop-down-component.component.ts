import { Component, Input } from '@angular/core'

@Component({
  selector: 'wallet-account-drop-down-component',
  templateUrl: 'wallet-account-drop-down-component.component.html',
  styleUrls: ['wallet-account-drop-down-component.component.css'],
})
export class WalletAccountDropDownComponent {
  @Input()
  wallet_connect_wallet_title: string = 'Connect/Remove Wallet (%s)'
  @Input()
  button_remove_wallet1: string = 'Remove Wallet'
  @Input()
  wallet_connect_wallet_subtitle: string = 'Connect or remove your wallet'
  @Input()
  button_deposit_money: string = 'Deposit Money'
  @Input()
  wallet_remove_wallet_title: string = 'Remove Wallet'
  @Input()
  button_remove_wallet: string = 'Remove Wallet'
  @Input()
  rootClassName: string = ''
  @Input()
  button_connect_wallet: string = 'Connect Wallet'
  @Input()
  wallet_deposit_money_title: string = 'Deposit Money'
  @Input()
  wallet_remove_wallet_subtitle: string =
    'Fully remove your connected wallet from the webpage'
  @Input()
  wallet_deposit_money_subtitle: string =
    'Deposit money into your account wallet to be able to buy tickets'
  @Input()
  wallet_amount: string = '(Amount: %s$)'
  constructor() {}
}
