import {Component, Input, OnInit} from '@angular/core'
import {ReviewsService} from "../../services/reviews.service";


@Component({
    selector: 'view-ratings-component',
    templateUrl: 'view-ratings-component.component.html',
    styleUrls: ['view-ratings-component.component.css'],
})
export class ViewRatingsComponent implements OnInit {
    @Input()
    rootClassName: string = ''
    @Input()
    viewRatingsTitle: string = 'Reviews'

    reviews: any[] = [];
    stationId: number = -1;

    constructor(private reviewsService: ReviewsService) {
        this.reviews = [];
        this.fetchStationReviews();
    }

    ngOnInit() {
        const navigation = window.history.state;
        this.stationId = navigation.stationId;
        this.fetchStationReviews();
    }

    fetchStationReviews() {
        if (this.stationId != -1) {
            this.reviewsService.fetchStationReviews(this.stationId).subscribe({
                next: (res) => {
                    this.reviews = res;
                },
                error: (err) => {
                    if (err.status === 404) this.reviews = [];
                    console.log(err.error);
                }
            })
        }
    }

    handleReviewDelete(reviewId: number) {
        console.log("Review deletion successfully announced in main component!")
        this.fetchStationReviews();
    }
}
