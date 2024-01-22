import { Component, Input } from '@angular/core'

@Component({
  selector: 'new-review-component',
  templateUrl: 'new-review-component.component.html',
  styleUrls: ['new-review-component.component.css'],
})
export class NewReviewComponent {
  @Input()
  reviewInputTitle: string = 'Enter Title'
  @Input()
  reviewInputTitlePlaceholder: string =
    'What is the most important information?'
  @Input()
  reviewDeleteReview: string = '(Delete)'
  @Input()
  rootClassName: string = ''
  @Input()
  reviewHeading: string = 'Create Review'
  @Input()
  reviewInputDescription: string = 'Enter a description for your rating'
  @Input()
  reviewInputDescriptionPlaceholder: string =
    'What did you like? What did you dislike?'
  @Input()
  buttonSend: string = 'Send'
  @Input()
  reviewRatingTitle: string = 'Rating'
  constructor() {}
}
