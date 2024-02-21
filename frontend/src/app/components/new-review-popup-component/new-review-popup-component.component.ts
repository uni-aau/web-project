import {Component, Inject, Input} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModelService} from "../../services/model.service";
import {ReviewsService} from "../../services/reviews.service";

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
  @Input()
  newRatingGeneralSelection: string = 'None'

  ratingDescription: string = '';
  ratingTitle: string = '';
  stars = [1, 2, 3, 4, 5];
  rating = 1;

  bikeModels: any[] = [];
  modelId: number = -1;

  constructor(public dialogRef: MatDialogRef<NewReviewPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private reviewService: ReviewsService, private modelService: ModelService) {
    this.fetchModels();

  }

  setRating(newRating: number): void {
    this.rating = newRating;
  }

    getPath(index: number): string {
        if (index < this.rating) {
            // Return the new path data for filled stars
            return "M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z";
        } else {
            // Return the original path data
            return "M512 658l160 96-42-182 142-124-188-16-72-172-72 172-188 16 142 124-42 182zM938 394l-232 202 70 300-264-160-264 160 70-300-232-202 306-26 120-282 120 282z";
        }
    }

  handleConfirm() {
      if(!this.ratingTitle) {
          this.newReviewTitleError = 'Insert valid title';
          return;
      }

      let modelId = this.modelId === -1 ? undefined : this.modelId;
      console.log(modelId)

      this.dialogRef.close({ratingTitle: this.ratingTitle, rating: this.rating, ratingModel: modelId, ratingDescription: this.ratingDescription})


  }

  fetchModels() {
    this.modelService.getModels().subscribe({
      next: (val) => this.bikeModels = val,
      error: (err) => {
        if (err.status === 404) this.bikeModels = [];
        console.log(err.error);
      }
    })
  }

  handleSelect(event: any) {
    const modelId = event.target.value;

    if (modelId && modelId != -1) {
      this.modelId = modelId;
    }
  }


}
