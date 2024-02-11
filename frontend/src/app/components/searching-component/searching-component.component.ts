import { Component, Input } from '@angular/core'

@Component({
  selector: 'searching-component',
  templateUrl: 'searching-component.component.html',
  styleUrls: ['searching-component.component.css'],
})
export class SearchingComponent {
  @Input()
  searchInputPlaceholder: string = 'Search for {0}'
  @Input()
  searchButtonSearch: string = 'Search'
  @Input()
  rootClassName: string = ''
  @Input()
  searchButtonCreate: string = 'Create'
  constructor() {}
}
