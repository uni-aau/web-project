import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";
import {PopupService} from "../../popup.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComponentsModule, NgIf],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  constructor(private title: Title, private meta: Meta, public popupService: PopupService) {
    this.title.setTitle('WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'WebProject',
      },
    ])
  }

  togglePopup() {
    if(this.popupService.getPopUpVisibility()) this.popupService.hidePopUp();
    else  this.popupService.showPopUp();
  }
}
