import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Router} from "@angular/router";
import {BikeStation} from "../../types/bikeStation.type";
import {BikeStationService} from "../../services/bikestation.service";
import {ReviewsService} from "../../services/reviews.service";

@Component({
  selector: 'admin-bike-station-entry-component',
  templateUrl: 'admin-bike-station-entry-component.component.html',
  styleUrls: ['admin-bike-station-entry-component.component.css'],
})
export class AdminBikeStationEntryComponent {
  @Output() update = new EventEmitter<string>();
  @Input()
  bikeStation: BikeStation =  {
    description: "string",
    latitude: 0,
    longitude: 0,
    station_address: "string",
    station_image_location: "string",
    station_name: "string",
    station_id: 0
  };
  @Input()
  adminBikeStationEntryButtonUpdate: string = 'Update'
  @Input()
  adminBikeStationEntryImageSrc: string = '/assets/no-image.svg'
  @Input()
  adminBikeStationEntryButtonDeleteRatings: string = 'Delete Ratings'
  @Input()
  adminBikeStationEntryDescription: string = '{0}'
  @Input()
  adminBikeStationEntryButtonDelete: string = 'Delete'
  @Input()
  adminBikeStationEntryImageAlt: string = 'image'
  @Input()
  adminBikeStationEntryStationName: string = '{0}'
  @Input()
  adminBikeStationEntryStarRatingNumber: string = '({0})'
  @Input()
  adminBikeStationEntryButtonManageRatings: string = 'Manage Ratings'
  @Input()
  adminBikeStationEntryLocation: string = '{0}'
  @Input()
  rootClassName: string = ''

  ratingNumber = Array(1).fill(0).map((x, i) => i);
  ratingNumberReversed = Array(5).fill(0).map((x, i) => i);
  maxRating = 5;

  constructor(private router : Router, private reviewService:ReviewsService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.reviewService.fetchStationReviews(this.bikeStation.station_id).subscribe((data)=> {
      // this.bikeStationRatingAmount = data[0].rating;
      console.log(data[0].rating)
      let sum = 0;
      data.forEach((rate:any) => {
        sum += rate.rating
      })
      sum = sum / data.length;
      this.adminBikeStationEntryStarRatingNumber = "(" + String(sum) +")";
      const rating = data[0].rating;
      this.ratingNumber = Array(rating).fill(0).map((x, i) => i);
      this.ratingNumberReversed = Array(this.maxRating - rating).fill(0).map((x, i) => i);
    })
  }

  onUpdate(){
    this.router.navigate(["/admin-manage-bike-station"], {
      state: {
        bikeStation: this.bikeStation
      }
    })
  }
}
