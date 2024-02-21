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

  constructor(private bikeService: BikeService, private popupService: PopupService) {
    this.bikes = [];
    this.fetchBikes();
  }

  fetchBikes() {
    this.bikeService.fetchBikes().subscribe({
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
    this.popupService.openCreateBikePopup().subscribe({
      next: (val) => {
        if (val) {
          let bikeStatus = val.isOperational ? 'Available' : 'Maintenance';
          this.bikeService.addBike(val.bikeName, val.bikeSize, val.bikePrice, bikeStatus, val.imageLink, val.modelId).subscribe({
            next: (val) => {
              if (val.success) {
                this.fetchBikes();
              }
            },
            error: (err) => console.log(err)
          })
        }
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
