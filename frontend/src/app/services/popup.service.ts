import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogPopupComponent} from "../components/dialog-popup-component/dialog-popup-component.component";
import {Observable} from "rxjs";
import {DepositMoneyPopup} from "../components/deposit-money-popup/deposit-money-popup.component";
import {
  AdminBikeAssignmentComponent
} from "../components/admin-bike-assignment-component/admin-bike-assignment-component.component";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog: MatDialog) {
  }

  openPopup(description: string): Observable<boolean> {
    const dialogRef = this.dialog.open(DialogPopupComponent, {data: {description: description}})

    return dialogRef.afterClosed();
  }

  openDepositMoneyPopup(): Observable<number> {
    const dialogRef = this.dialog.open(DepositMoneyPopup);

    return dialogRef.afterClosed();
  }

  openAssignBikePopup(modelName: string, categoryName: string): Observable<any[]> {
    const dialogRef = this.dialog.open(AdminBikeAssignmentComponent, {data: {model: modelName, category: categoryName}})

    return dialogRef.afterClosed();
  }
}
