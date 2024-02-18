import { Component, Input } from '@angular/core'

@Component({
  selector: 'wallet-account-drop-down-component',
  templateUrl: 'wallet-account-drop-down-component.component.html',
  styleUrls: ['wallet-account-drop-down-component.component.css'],
})
export class WalletAccountDropDownComponent {
  @Input()
  walletSettingsTitle: string = 'Wallet'
  @Input()
  walletSettingsAccountSettingsMoneyAmount: string =
    'Total Amount: {0} | Available Amount: {1}'
  @Input()
  walletSettingsConnectWalletSubtitle: string = 'Connect or remove your wallet'
  @Input()
  walletSettingsDepositMoneySubtitle: string =
    'Deposit money into your account wallet to be able to buy tickets'
  @Input()
  welletSettingsButtonRemoveWallet: string = 'Remove Wallet'
  @Input()
  walletSettingsTitleDepositMoney: string = 'Deposit Money'
  @Input()
  walletSettingsButtonDepositMoney: string = 'Deposit Money'
  @Input()
  walletSettingsButtonConnectWallet: string = 'Connect Wallet'
  @Input()
  rootClassName: string = ''
  @Input()
  walletSettingsTitleConnectWallet: string = 'Connect/Remove Wallet ({0})'
  constructor() {}
}
