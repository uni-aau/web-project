import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {ReviewsService} from "../../services/reviews.service";
import {Router} from "@angular/router";
import {BikeStation} from "../../types/bikeStation.type";
import {PopupService} from "../../services/popup.service";
import {BikeStationService} from "../../services/bikestation.service";

@Component({
  selector: 'bike-station-component',
  templateUrl: 'bike-station-component.component.html',
  styleUrls: ['bike-station-component.component.css'],
})
export class BikeStationComponent implements OnInit {
  @Input()
  bikeStationLocation: string = '{0}'
  @Input()
  bikeStationId: number = 0
  @Input()
  rootClassName: string = ''
  @Input()
  bikeStationImageAlt: string = 'More Infos'
  @Input()
  bikeStationButtonViewRatings: string = 'View Ratings'
  @Input()
  bikeStationRatingAmount: string = '{0}'
  @Input()
  bikeStationDescription1: string = '{0}'
  @Input()
  bikeStationButtonRate1: string = 'Rate'
  @Input()
  bikeStationButtonMoreInfos1: string = 'More Infos'
  @Input()
  bikeStationTitle: string = '{0}'
  @Input()
  bikeStationImageSrc1: string = '/assets/no-image.svg'

  @Output() onStationUpdate: EventEmitter<any> = new EventEmitter<any>();

  noRatingsText = "(No Ratings)";
  ratingsErrorText = "(Error)";

  @Input()
  bikeStation: BikeStation = {
    description: "string",
    latitude: 0,
    longitude: 0,
    station_address: "string",
    station_image_location: "string",
    station_name: "string",
    station_id: 0
  };

  ratingNumber = Array(1).fill(0).map((x, i) => i);
  ratingNumberReversed = Array(5).fill(0).map((x, i) => i);
  maxRating = 5;

  constructor(private reviewService: ReviewsService, private router: Router, private popupService: PopupService, private stationService: BikeStationService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.reviewService.fetchStationReviews(this.bikeStation.station_id).subscribe(
      {
        next: (data) => {
          let sum = 0;
          data.forEach((rate: any) => {
            sum += rate.rating
          })

          let mean = sum / data.length;
          this.bikeStationRatingAmount = "(" + String(mean.toFixed(2)) + ")";
          let rating = Math.floor(mean);
          this.ratingNumber = Array(Math.round(rating)).fill(0).map((x, i) => i);
          this.ratingNumberReversed = Array(this.maxRating - rating).fill(0).map((x, i) => i);
        },
        error: (err) => {
          if (err.status === 404) this.bikeStationRatingAmount = this.noRatingsText;
          else this.bikeStationRatingAmount = this.ratingsErrorText;

          this.ratingNumber = Array(0).fill(0).map((x, i) => i);
          this.ratingNumberReversed = Array(5).fill(0).map((x, i) => i);
        }
      })
  }

  performViewRatingsClick() {
    this.router.navigate(["/bike-station/reviews"], {
      state: {stationId: this.bikeStation.station_id}
    });
  }

  performMoreInfo() {
    this.router.navigate(["/booking"], {
      state: {station: this.bikeStation}
    });
  }

  rateStation() {
    this.popupService.openNewReviewPopup().subscribe(result => {
      if (result) this.executeCreateReviewQuery(result);
    })
  }

  executeCreateReviewQuery(result: any) {
    this.reviewService.addReview(this.bikeStationId, result.rating, result.ratingTitle, result.ratingModel, result.ratingDescription).subscribe({
      next: (val) => {
        if (val.success) this.onStationUpdate.emit();
        else console.log("Error, inserting review was not successful ", val)
      },
      error: (err) => console.log(`Error while inserting review in station ${this.bikeStationId} `, err)
    })
  }


}
