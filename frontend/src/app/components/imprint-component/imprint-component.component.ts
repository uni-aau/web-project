import { Component, Input } from '@angular/core'

@Component({
  selector: 'imprint-component',
  templateUrl: 'imprint-component.component.html',
  styleUrls: ['imprint-component.component.css'],
})
export class ImprintComponent {
  @Input()
  headlineImprint: string = 'Imprint'
  @Input()
  rootClassName: string = ''
  @Input()
  textImprint: string = 'Hier steht ein Impressum'
  constructor() {}
}
