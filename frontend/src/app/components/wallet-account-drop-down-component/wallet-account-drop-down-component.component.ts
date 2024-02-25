import {Component, Input} from '@angular/core'
import {WalletService} from "../../services/wallet.service";
import {LanguageHandler} from "../../handler/LanguageHandler";
import {PopupService} from "../../services/popup.service";

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
        'Total Amount: {0}$ | Available Amount: {1}$'
    // TODO use angular translation handler
    walletSettingsMoneyAmountOld: string =
        'Total Amount: {0}$ | Available Amount: {1}$'
    @Input()
    walletSettingsConnectWalletSubtitle: string = 'Connect or remove your bank account'
    @Input()
    walletSettingsDepositMoneySubtitle: string =
        'Deposit money into your account wallet to be able to buy tickets'
    @Input()
    walletSettingsButtonRemoveWallet: string = 'Remove Account'
    @Input()
    walletSettingsTitleDepositMoney: string = 'Deposit Money'
    @Input()
    walletSettingsButtonDepositMoney: string = 'Deposit Money'
    @Input()
    walletSettingsButtonConnectWallet: string = 'Connect Account'
    @Input()
    rootClassName: string = ''
    @Input()
    walletSettingsTitleConnectWallet: string = 'Connect/Remove Bank Account ({0})'
    walletSettingsTitleConnectWalletOld: string = 'Connect/Remove Bank Account ({0})'
    @Input()
    walletSettingsDepositMoneyError: string = ''
    @Input()
    connectedBankAccount: boolean = false;

    constructor(private walletService: WalletService, private popupService: PopupService) {
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

                    this.walletSettingsMoneyAmount = LanguageHandler.formatString(this.walletSettingsMoneyAmountOld, [totalMoneyAmount, availableMoneyAmount]);
                } else console.log("No wallet information available");
            },
            error: (err) => {
                console.log("Error: ", err.error);
            }
        });
    }

    checkBankConnection() {
        console.log("Test")
        this.walletService.hasBankAccountConnected().subscribe({
            next: (response) => {
                if (response[0].has_connected_bank_account) {
                    this.connectedBankAccount = true;
                    this.walletSettingsTitleConnectWallet = LanguageHandler.formatString(this.walletSettingsTitleConnectWalletOld, ["✔"]);
                } else {
                    this.connectedBankAccount = false;
                    this.walletSettingsTitleConnectWallet = LanguageHandler.formatString(this.walletSettingsTitleConnectWalletOld, ["❌"]);
                }
            },
            error: (err) => {
                this.walletSettingsTitleConnectWallet = LanguageHandler.formatString(this.walletSettingsTitleConnectWalletOld, ["Error Occurred"]);
                this.connectedBankAccount = false;
                console.log("Error: ", err.error)
            }
        })
    }

    connectBankAccount() {
        this.walletService.connectBankAccount().subscribe({
            next: (response) => {
                console.log("Response: ", response)
                this.checkBankConnection();
            },
            error: (err) => console.log("Error: ", err.error)
        })
    }

    removeBankAccount() {
        this.walletService.disconnectBankAccount().subscribe({
            next: (response) => {
                console.log("Response: ", response)
                this.checkBankConnection();
            },
            error: (err) => console.log("Error: ", err.error)
        })

        this.checkBankConnection()
    }


    depositMoney() {
        if (this.connectedBankAccount) {
            this.popupService.openDepositMoneyPopup().subscribe(result => {
                if (result > 0) {
                    console.log("Valid amount: " + result);
                    this.walletService.depositMoney(result).subscribe({
                        next: (res) => {
                            this.fetchWalletAmount();
                        },
                        error: (err) => console.log("Error depositing money: ", err)
                    });
                }
            });
        } else alert("Please connect bank account first")
    }
}
