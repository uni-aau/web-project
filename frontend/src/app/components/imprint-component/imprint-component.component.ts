import { Component, Input } from '@angular/core'

@Component({
  selector: 'imprint-component',
  templateUrl: 'imprint-component.component.html',
  styleUrls: ['imprint-component.component.css'],
})
export class ImprintComponent {
  @Input()
  heading: string = 'Impressum'
  @Input()
  text: string = 'Hier steht ein Impressum'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
