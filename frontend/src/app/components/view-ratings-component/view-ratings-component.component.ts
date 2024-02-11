import { Component, Input } from '@angular/core'

@Component({
  selector: 'view-ratings-component',
  templateUrl: 'view-ratings-component.component.html',
  styleUrls: ['view-ratings-component.component.css'],
})
export class ViewRatingsComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  viewRatingsTitle: string = 'Reviews'
  constructor() {}
}
