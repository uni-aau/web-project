import {Component, Input, OnInit} from '@angular/core'
import {ReviewsService} from "../../services/reviews.service";
import {Router} from "@angular/router";
import {BikeStation} from "../../types/bikeStation.type";

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

  constructor(private reviewService: ReviewsService, private router: Router) {
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
          sum = sum / data.length;
          this.bikeStationRatingAmount = "(" + String(sum) + ")";
          const rating = data[0].rating;
          this.ratingNumber = Array(rating).fill(0).map((x, i) => i);
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
}
