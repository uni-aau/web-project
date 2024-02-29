import {Component, Input} from '@angular/core'

@Component({
  selector: 'button-search-component',
  templateUrl: 'button-search-component.component.html',
  styleUrls: ['button-search-component.component.css'],
})
export class ButtonSearchComponent {
  @Input()
  buttonSearch: string = 'Search'
  @Input()
  rootClassName: string = ''

  constructor() {
  }
}
