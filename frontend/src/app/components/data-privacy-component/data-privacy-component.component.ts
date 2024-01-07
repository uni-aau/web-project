import { Component, Input } from '@angular/core'

@Component({
  selector: 'data-privacy-component',
  templateUrl: 'data-privacy-component.component.html',
  styleUrls: ['data-privacy-component.component.css'],
})
export class DataPrivacyComponent {
  @Input()
  headline_dataprivacy: string = 'Datenschutz'
  @Input()
  text_dataprivacy: string = 'Hier steht mal was zum Datenschutz'
  constructor() {}
}
