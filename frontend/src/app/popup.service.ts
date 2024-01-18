import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NewReviewComponent} from "./components/new-review-component/new-review-component.component";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog: MatDialog) {
  }

  open(data: any) {
    return this.dialog.open(NewReviewComponent, {data: data});
  }
}
