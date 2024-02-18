import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseURL = "http://localhost:3000/api/wallet"

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) {}

  depositMoney() {

  }

  fetchWalletTotalAmount(): Observable<any> {
      return this.http.get(`${baseURL}/balance`)
  }

}
