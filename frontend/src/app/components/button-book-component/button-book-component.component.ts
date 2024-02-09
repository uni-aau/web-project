import { Component, Input } from '@angular/core'

@Component({
  selector: 'button-book-component',
  templateUrl: 'button-book-component.component.html',
  styleUrls: ['button-book-component.component.css'],
})
export class ButtonBookComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  adminCategoryButtonUpdate: string = 'Book'
  constructor() {}
}
