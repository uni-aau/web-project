import { Component, Input } from '@angular/core'

@Component({
  selector: 'new-review-component',
  templateUrl: 'new-review-component.component.html',
  styleUrls: ['new-review-component.component.css'],
})
export class NewReviewComponent {
  @Input()
  review_input_title: string = 'Enter Title'
  @Input()
  review_input_title_placeholder: string =
    'What is the most important information?'
  @Input()
  review_delete_review: string = '(Delete)'
  @Input()
  rootClassName: string = ''
  @Input()
  review_heading: string = 'Create Review'
  @Input()
  review_input_description: string = 'Enter a description for your rating'
  @Input()
  review_input_description_placeholder: string =
    'What did you like? What did you dislike?'
  @Input()
  button_send: string = 'Send'
  @Input()
  review_rating_title: string = 'Rating'
  constructor() {}
}
