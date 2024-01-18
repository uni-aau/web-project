import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";
import {PopupService} from "../../popup.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  constructor(private title: Title, private meta: Meta, private _dialog: PopupService) {
    this.title.setTitle('WebProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'WebProject',
      },
    ])
  }

  click() {
    this._dialog.open({name: "First Last"})
  }
}
