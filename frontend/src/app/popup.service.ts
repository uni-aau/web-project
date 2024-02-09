import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {BookingQRCodeComponent} from "./components/booking-qr-code-component/booking-qr-code-component.component";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog: MatDialog) {
  }

  open(data: any) {
    return this.dialog.open(BookingQRCodeComponent, {data: data});
  }
}
