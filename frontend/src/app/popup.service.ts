import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private isVisible: boolean = false;

  showPopUp() {
    this.isVisible = true;
  }

  hidePopUp() {
    this.isVisible = false;
  }

  getPopUpVisibility() {
    return this.isVisible;
  }

  constructor() { }
}
