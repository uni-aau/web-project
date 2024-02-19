import {Component, Input} from '@angular/core'
import {ReviewsService} from "../../services/reviews.service";


@Component({
    selector: 'view-ratings-component',
    templateUrl: 'view-ratings-component.component.html',
    styleUrls: ['view-ratings-component.component.css'],
})
export class ViewRatingsComponent {
    @Input()
    rootClassName: string = ''
    @Input()
    viewRatingsTitle: string = 'Reviews'

    reviews: any[] = [];

    constructor(private reviewsService: ReviewsService) {
        this.reviews = [];
        this.fetchStationReviews();
    }

    fetchStationReviews() {
        this.reviewsService.fetchStationReviews(1).subscribe({
            next: (res) => {
                this.reviews = res;
            },
            error: (err) => {
                console.log(err.error);
            }
        })
    }
}
