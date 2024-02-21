import { Component, Input } from '@angular/core'
import {BikeService} from "../../services/bike.service";

@Component({
  selector: 'booking-component',
  templateUrl: 'booking-component.component.html',
  styleUrls: ['booking-component.component.css'],
})
export class BookingComponent {
  @Input()
  bookingLabelSearch: string = 'Location: {0} | Station: {1}'
  @Input()
  bookingCategoriesTitle: string = 'Categories'
  @Input()
  bookingBikesTitle: string = 'Bikes'
  @Input()
  bookingModelsTitle: string = 'Models'
  @Input()
  bookingTitle: string = 'Booking'
  @Input()
  rootClassName: string = ''
  bikes: any;
  constructor(private bikeService:BikeService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.bikeService.fetchBikes().subscribe({
      next: (res) => {
        this.bikes = res;
      },
      error: (err) => {
        if (err.status === 404) this.bikes = [];
        console.log(err.error);
      }
    })
  }

  performSearch($event: string) {

  }
}
