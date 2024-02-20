import {Component, Input} from '@angular/core'
import {BikeService} from "../../services/bike.service";

@Component({
  selector: 'admin-bikes-management-component',
  templateUrl: 'admin-bikes-management-component.component.html',
  styleUrls: ['admin-bikes-management-component.component.css'],
})
export class AdminBikesManagementComponent {
  @Input()
  adminBikesManagementTitle: string = 'Manage Bikes'
  @Input()
  rootClassName: string = ''

  bikes: any[] = [];

  constructor(private bikesService: BikeService) {
    this.bikes = [];
    this.fetchBikes();
  }

  fetchBikes() {
    this.bikesService.fetchBikes().subscribe({
      next: (res) => {
        this.bikes = res;
      },
      error: (err) => {
        if (err.status === 404) this.bikes = [];
        console.log(err.error);
      }
    })
  }

  handleBikeDelete(bikeId: number) {
    console.log("Bike deletion successfully announced in main component!")
    this.fetchBikes()
  }

  handleUpdatedBike() {
    this.fetchBikes();
  }
}
