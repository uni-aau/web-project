import { Component, Input } from '@angular/core'

@Component({
  selector: 'imprint-component',
  templateUrl: 'imprint-component.component.html',
  styleUrls: ['imprint-component.component.css'],
})
export class ImprintComponent {
  @Input()
  headline_imprint: string = 'Imprint'
  @Input()
  rootClassName: string = ''
  @Input()
  text_imprint: string = 'Hier steht ein Impressum'
  constructor() {}
}
