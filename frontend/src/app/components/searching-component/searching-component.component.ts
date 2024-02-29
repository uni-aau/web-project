import {Component, EventEmitter, Input, Output} from '@angular/core'
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'searching-component',
  templateUrl: 'searching-component.component.html',
  styleUrls: ['searching-component.component.css'],
})
export class SearchingComponent {
  @Output() search = new EventEmitter<string>();
  @Output() create = new EventEmitter<string>();
  @Input()
  searchInputPlaceholder: string = 'Search for {0}'
  @Input()
  searchButtonSearch: string = 'Search'
  @Input()
  rootClassName: string = ''
  @Input()
  searchButtonCreate: string = 'Create'
  @Input()
  visibleCreateButton: boolean = true;

  searchTerm: string = '';

  constructor(public AuthService: AuthService) {
  }

  onSearch() {
    this.search.emit(this.searchTerm);
  }

  onCreate() {
    this.create.emit();
  }
}
