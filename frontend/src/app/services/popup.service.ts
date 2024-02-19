import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogPopupComponent} from "../components/dialog-popup-component/dialog-popup-component.component";
import {Observable} from "rxjs";

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
}
