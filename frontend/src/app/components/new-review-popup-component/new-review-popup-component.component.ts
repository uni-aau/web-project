import { Component, Input } from '@angular/core'

@Component({
  selector: 'new-review-popup-component',
  templateUrl: 'new-review-popup-component.component.html',
  styleUrls: ['new-review-popup-component.component.css'],
})
export class NewReviewPopupComponent {
  @Input()
  newReviewModelError: string = ''
  @Input()
  newReviewDescriptionError: string = ''
  @Input()
  newReviewTitleError: string = ''
  @Input()
  newReviewLabelTitle: string = 'Enter Title'
  @Input()
  newReviewInputPlaceholderTitle: string = 'What is important?'
  @Input()
  newReviewLinkDelete: string = '(Delete)'
  @Input()
  rootClassName: string = ''
  @Input()
  newReviewLabelSelectModel: string = 'Select Model'
  @Input()
  newReviewTitle: string = 'Create Review'
  @Input()
  newReviewLabelDescription: string = 'Enter a description for your rating'
  @Input()
  newReviewInputPlaceholderDescription: string =
    'What did you like? What did you dislike?'
  @Input()
  newReviewButtonSend: string = 'Send'
  @Input()
  newReviewSubtitleRating: string = 'Rating'
  constructor() {}
}
