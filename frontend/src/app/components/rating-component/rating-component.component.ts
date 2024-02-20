import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {LanguageHandler} from "../../handler/LanguageHandler";
import {formatDate} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {PopupService} from "../../services/popup.service";
import {ReviewsService} from "../../services/reviews.service";

@Component({
  selector: 'rating-component',
  templateUrl: 'rating-component.component.html',
  styleUrls: ['rating-component.component.css'],
})
export class RatingComponent implements OnInit {
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
  ratingInfosOld: string = '(Rating from: {0} | Model: {1})' // TODO

  @Input() ratingData: any | undefined;

  deleteRatingPopupDescription = "Do you really want to permanently delete the review?"
  reviewId = -1;

  ratingNumber = Array(1).fill(0).map((x, i) => i);
  ratingNumberReversed = Array(5).fill(0).map((x, i) => i);
  maxRating = 5;

  @Output() onReviewDelete: EventEmitter<any> = new EventEmitter<any>();


  constructor(public AuthService: AuthService, private popupService: PopupService, private reviewsService: ReviewsService) {
  }

  ngOnInit() {
    this.insertData();
  }

  insertData() {
    if (this.ratingData) {
      this.ratingUsername = this.ratingData.username;
      this.ratingDescription = this.ratingData.comment;
      this.ratingUserProfileImageSrc = this.ratingData.profile_picture_location;
      this.reviewId = this.ratingData.review_id;

      const rating = this.ratingData.rating;
      this.ratingNumber = Array(rating).fill(0).map((x, i) => i);
      this.ratingNumberReversed = Array(this.maxRating - rating).fill(0).map((x, i) => i);

      const modelName = this.ratingData.model_name;
      let timestamp = this.formatTimestamp(this.ratingData.timestamp);

      if (this.ratingData.model_name) this.ratingInfos = LanguageHandler.formatString(this.ratingInfosOld, [timestamp, modelName]);
      else this.ratingInfos = LanguageHandler.formatString(this.ratingInfosOld, [timestamp, "-"]);

      this.ratingTitle = this.ratingData.title;
    }
  }

  // TODO for i18n
  formatTimestamp(timestamp: string) {
    const date = new Date(timestamp);
    const format = 'yyyy/MM/dd HH:mm';
    const locale = 'en-US';

    return formatDate(date, format, locale)
  }

  deleteRating() {
    this.popupService.openPopup(this.deleteRatingPopupDescription)
      .subscribe(result => {
        if (result) {
          console.log("User confirmed action");
          this.reviewsService.deleteStationReview(this.reviewId).subscribe({
            next: (res) => {
              if(res.success) {
                this.onReviewDelete.emit(this.reviewId);
              } else {
                console.log("Error, deletion was not successful: ", res);
              }
            },
            error: (err) => console.log(`Error while deleting review ${this.reviewId}:`, err)
          })

        } else console.log("User canceled action")
      })
  }
}
