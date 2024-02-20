import {Component, Input} from '@angular/core'
import {BikeService} from "../../services/bike.service";
import {PopupService} from "../../services/popup.service";

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
  filteredBikes: any[] = [];

  constructor(private bikesService: BikeService, private popupService: PopupService) {
    this.bikes = [];
    this.fetchBikes();
  }

  fetchBikes() {
    this.bikesService.fetchBikes().subscribe({
      next: (res) => {
        this.bikes = res;
        this.performSearch("");
      },
      error: (err) => {
        if (err.status === 404) this.bikes = [];
        console.log(err.error);
      }
    })
  }

  performSearch(searchTerm: string) {
    if (!searchTerm) {
      this.filteredBikes = this.bikes;
    } else {
      this.filteredBikes = this.bikes.filter(bike => {
        bike.bike_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bike.category_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bike.model_name.toLowerCase().includes(searchTerm.toLowerCase())
      });
    }
  }

  performCreate() {
    // TODO
      this.popupService.openCreateBikePopup().subscribe({
        next: (val) => {

        },
        error: (err) => console.log(err)
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
