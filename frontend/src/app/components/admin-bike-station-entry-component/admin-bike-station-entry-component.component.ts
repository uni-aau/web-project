import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {Router} from "@angular/router";
import {BikeStation} from "../../types/bikeStation.type";
import {ReviewsService} from "../../services/reviews.service";
import {PopupService} from "../../services/popup.service";
import {BikeStationService} from "../../services/bikestation.service";

@Component({
  selector: 'admin-bike-station-entry-component',
  templateUrl: 'admin-bike-station-entry-component.component.html',
  styleUrls: ['admin-bike-station-entry-component.component.css'],
})
export class AdminBikeStationEntryComponent implements OnInit {
  @Output() update = new EventEmitter<string>();
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

  @Output() onStationDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onStationUpdate: EventEmitter<any> = new EventEmitter<any>();
  @Output() onStationReviewDelete: EventEmitter<any> = new EventEmitter<any>();

  noRatingsText = "(No Ratings)";
  ratingsErrorText = "(Error)";
  popupDeleteStationConfirmationText = "Do you really want to delete the bike station? All parking stations and reviews will be lost, all bikes get unassigned"
  popupDeleteReviewsConfirmationText = "Do you really want to delete all ratings of this station?"
  ratingsAmount = 0;

  ratingNumber = Array(1).fill(0).map((x, i) => i);
  ratingNumberReversed = Array(5).fill(0).map((x, i) => i);
  maxRating = 5;

  constructor(private router: Router, private reviewService: ReviewsService, private popupService: PopupService, private stationService: BikeStationService) {
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
            this.ratingsAmount++;
          })

          let mean = sum / data.length;
          this.adminBikeStationEntryStarRatingNumber = "(" + String(mean.toFixed(2)) + ")";
          let rating = Math.floor(mean);
          this.ratingNumber = Array(Math.round(rating)).fill(0).map((x, i) => i);
          this.ratingNumberReversed = Array(this.maxRating - rating).fill(0).map((x, i) => i);
        },
        error: (err) => {
          if (err.status === 404) this.adminBikeStationEntryStarRatingNumber = this.noRatingsText;
          else this.adminBikeStationEntryStarRatingNumber = this.ratingsErrorText;

          this.ratingNumber = Array(0).fill(0).map((x, i) => i);
          this.ratingNumberReversed = Array(5).fill(0).map((x, i) => i);
        }
      })
  }

  onDeleteRatings() {
    if (this.ratingsAmount > 0) {
      this.popupService.openPopup(this.popupDeleteReviewsConfirmationText).subscribe(result => {
        if (result) {
          this.executeRatingDeletionQuery()
        }
      })
    } else alert("No ratings available to delete!");
  }

  executeRatingDeletionQuery() {
    this.reviewService.deleteAllStationReviews(this.bikeStation.station_id).subscribe({
      next: (val) => this.onStationReviewDelete.emit(),
      error: (err) => console.log("Error while deleting station ratings: ", err)
    })
  }

  onDeleteStation() {
    this.popupService.openPopup(this.popupDeleteStationConfirmationText).subscribe(result => {
      if (result) {
        this.checkBikeStatus();
      }
    })
  }

  checkBikeStatus() {
    this.stationService.checkBikeStatus(this.bikeStation.station_id).subscribe({
        next: (val) => {
          alert('There are currently bikes assigned, which are not available!');
        },
        error: (err) => {
          if (err.status === 404) this.executeStationDeletionQuery();
          else console.log("There was an error while checking bike status: ", err)
        }
      }
    )
  }

  executeStationDeletionQuery() {
    this.stationService.deleteBikeStation(this.bikeStation.station_id).subscribe({
      next: (val) => this.onStationDelete.emit(),
      error: (err) => console.log("Error while deleting bike station: ", err)
    })
  }


  onUpdate() {
    this.router.navigate(["/admin-manage-bike-station"], {
      state: {
        bikeStation: this.bikeStation
      }
    })
  }

  performManageRatingsClick() {
    this.router.navigate(["/bike-station/reviews"], {
      state: {stationId: this.bikeStation.station_id}
    });
  }


}
