import {Component, Input} from '@angular/core'

@Component({
  selector: 'imprint-component',
  templateUrl: 'imprint-component.component.html',
  styleUrls: ['imprint-component.component.css'],
})
export class ImprintComponent {
  @Input()
  imprintTitle: string = 'Imprint'
  @Input()
  rootClassName: string = ''
  @Input()
  imprintText: string = 'Currently not available'

  constructor() {
  }
}
