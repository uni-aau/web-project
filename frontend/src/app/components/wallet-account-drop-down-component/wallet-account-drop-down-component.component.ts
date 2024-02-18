import {Component, Input} from '@angular/core'
import {WalletService} from "../../services/wallet.service";
import {LanguageHandler} from "../../handler/LanguageHandler";

@Component({
  selector: 'wallet-account-drop-down-component',
  templateUrl: 'wallet-account-drop-down-component.component.html',
  styleUrls: ['wallet-account-drop-down-component.component.css'],
})
export class WalletAccountDropDownComponent {
  @Input()
  walletSettingsTitle: string = 'Wallet'
  @Input()
  walletSettingsMoneyAmount: string =
    'Total Amount: {0} | Available Amount: {1}'
  @Input()
  walletSettingsConnectWalletSubtitle: string = 'Connect or remove your wallet'
  @Input()
  walletSettingsDepositMoneySubtitle: string =
    'Deposit money into your account wallet to be able to buy tickets'
  @Input()
  walletSettingsButtonRemoveWallet: string = 'Remove Wallet'
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
  @Input()
  walletSettingsDepositMoneyError: string = ''

  constructor(private walletService: WalletService) {
    this.fetchWalletAmount();
    this.checkBankConnection()
  }

  fetchWalletAmount() {
    let totalMoneyAmount = "-1";
    let availableMoneyAmount = "-1";

    this.walletService.fetchWalletBalance().subscribe({
      next: (response) => {
        if (response && response.length > 0) {
          const wallet = response[0];
          totalMoneyAmount = wallet.balance;
          availableMoneyAmount = wallet.available_balance;

          this.walletSettingsMoneyAmount = LanguageHandler.formatString(this.walletSettingsMoneyAmount, [totalMoneyAmount, availableMoneyAmount]);
        } else console.log("No wallet information available");
      },
      error: (err) => {
        console.log("Error: ", err.error);
      }
    });
  }

  checkBankConnection() {
    let connectedBankAccount = false;
    this.walletService.hasBankAccountConnected().subscribe({
      next: (response) => {
        if (response[0].has_connected_bank_account) {
          connectedBankAccount = true;
          this.walletSettingsTitleConnectWallet = LanguageHandler.formatString(this.walletSettingsTitleConnectWallet, ["✔"]);
        } else {
          connectedBankAccount = false;
          this.walletSettingsTitleConnectWallet = LanguageHandler.formatString(this.walletSettingsTitleConnectWallet, ["❌"]);
        }
      },
      error: (err) => {
        this.walletSettingsTitleConnectWallet = LanguageHandler.formatString(this.walletSettingsTitleConnectWallet, ["Error Occurred"]);
        console.log("Error: ", err.error)
      }
    })

    return connectedBankAccount;
  }


  depositMoney() {
    console.log("Works")
  }
}
