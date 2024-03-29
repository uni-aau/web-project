import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseURL = "http://localhost:3000/api/wallets"

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) {
  }

  depositMoney(value: number) {
    return this.http.put(`${baseURL}/deposit-money`, {amount: value});
  }

  fetchWalletBalance(): Observable<any> {
    return this.http.get(`${baseURL}/balance`);
  }

  hasBankAccountConnected(): Observable<any> {
    return this.http.get(`${baseURL}/bank-connection`);
  }

  connectBankAccount(): Observable<any> {
    return this.http.put(`${baseURL}/connect`, {});
  }

  disconnectBankAccount(): Observable<any> {
    return this.http.put(`${baseURL}/disconnect`, {})
  }

  withDrawMoneyUser(amount: number): Observable<any> {
    return this.http.put(`${baseURL}/withdraw-money`, {amount: amount});
  }

}
