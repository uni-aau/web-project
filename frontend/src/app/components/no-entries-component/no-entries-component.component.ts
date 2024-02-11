import { Component, Input } from '@angular/core'

@Component({
  selector: 'no-entries-component',
  templateUrl: 'no-entries-component.component.html',
  styleUrls: ['no-entries-component.component.css'],
})
export class NoEntriesComponent {
  @Input()
  noEntriesTitle: string = '{0}'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
