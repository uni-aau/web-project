import { Component, Input } from '@angular/core'

@Component({
  selector: 'rating-component',
  templateUrl: 'rating-component.component.html',
  styleUrls: ['rating-component.component.css'],
})
export class RatingComponent {
  @Input()
  ratingTitle: string = '{0}'
  @Input()
  ratingImageAlt: string = 'image'
  @Input()
  ratingUserProfileImageSrc: string = '/assets/no-image.svg'
  @Input()
  ratingUsername: string = '{0}'
  @Input()
  rootClassName: string = ''
  @Input()
  ratingButtonDelete: string = 'Delete'
  @Input()
  ratingDescription: string = '{0}'
  @Input()
  ratingInfos: string = '(Rating from: {0} | Model: {1})'
  constructor() {}
}
