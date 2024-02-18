import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Dialog} from "@angular/cdk/dialog";
import {DialogPopupComponent} from "../components/dialog-popup-component/dialog-popup-component.component";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog: MatDialog) { }

  openConfirmationPopup(data: any) {
    return this.dialog.open(DialogPopupComponent, data)
  }
}
