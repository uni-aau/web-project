import {Component, Input} from '@angular/core'

@Component({
  selector: 'unauthorized-component',
  templateUrl: 'unauthorized-component.component.html',
  styleUrls: ['unauthorized-component.component.css'],
})
export class UnauthorizedComponent {
  @Input()
  unauthorizedTitle: string = 'Error, there is nothing to see  :('
  @Input()
  unauthorizedSubTitle: string =
    'Please log in with the proper account to view this page!'
  @Input()
  rootClassName: string = ''

  constructor() {
  }
}
