import { Component, Input } from '@angular/core'

@Component({
  selector: 'new-review-popup-component',
  templateUrl: 'new-review-popup-component.component.html',
  styleUrls: ['new-review-popup-component.component.css'],
})
export class NewReviewPopupComponent {
  @Input()
  reviewInputTitle: string = 'Enter Title'
  @Input()
  reviewInputTitlePlaceholder: string = 'What is important?'
  @Input()
  reviewDeleteReview: string = '(Delete)'
  @Input()
  rootClassName: string = ''
  @Input()
  reviewSelectModelText: string = 'Select Model'
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
