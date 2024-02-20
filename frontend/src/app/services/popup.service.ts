import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogPopupComponent} from "../components/dialog-popup-component/dialog-popup-component.component";
import {Observable} from "rxjs";
import {DepositMoneyPopup} from "../components/deposit-money-popup/deposit-money-popup.component";
import {
  AdminBikeAssignmentComponent
} from "../components/admin-bike-assignment-component/admin-bike-assignment-component.component";
import {
  AdminManageBikePopupComponent
} from "../components/admin-manage-bike-popup-component/admin-manage-bike-popup-component.component";

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

  openAssignBikePopup(modelName: string, categoryName: string, categoryId: string) {
    const dialogRef = this.dialog.open(AdminBikeAssignmentComponent, {data: {model: modelName, category: categoryName, categoryId: categoryId}})

    return dialogRef.afterClosed();
  }

  openCreateBikePopup() {
    const dialogRef = this.dialog.open(AdminManageBikePopupComponent)

    return dialogRef.afterClosed();
  }

  openUpdateBikePopup(bikeName: string, bikeSize: number, bikePrice: number, isOperational : string, imageLink: string) {
    const dialogRef = this.dialog.open(AdminManageBikePopupComponent, {data: {bikeName: bikeName, bikePrice: bikePrice, bikeSize: bikeSize, isOperational: isOperational, imageLink: imageLink}})

    return dialogRef.afterClosed();
  }

}
