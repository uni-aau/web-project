import { Component, OnInit, Input } from '@angular/core'
import {BikeStationService} from "../../services/bikestation.service";
import {ReviewsService} from "../../services/reviews.service";

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
  ratingNumber = Array(1).fill(0).map((x, i) => i);
  ratingNumberReversed = Array(5).fill(0).map((x, i) => i);
  maxRating = 5;
  constructor(private bikeStationService: BikeStationService, private reviewService:ReviewsService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
      this.reviewService.fetchStationReviews(this.bikeStationId).subscribe((data)=> {
        // this.bikeStationRatingAmount = data[0].rating;
        console.log(data[0].rating)
        let sum = 0;
        data.forEach((rate:any) => {
          sum += rate.rating
        })
        sum = sum / data.length;
        this.bikeStationRatingAmount = "(" + String(sum) +")";
        const rating = data[0].rating;
        this.ratingNumber = Array(rating).fill(0).map((x, i) => i);
        this.ratingNumberReversed = Array(this.maxRating - rating).fill(0).map((x, i) => i);
      })
  }
}
