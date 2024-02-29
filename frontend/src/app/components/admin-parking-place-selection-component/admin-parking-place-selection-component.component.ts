import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {ParkingspotService} from "../../services/parkingspot.service";
import {PopupService} from "../../services/popup.service";

@Component({
  selector: 'admin-parking-place-selection-component',
  templateUrl: 'admin-parking-place-selection-component.component.html',
  styleUrls: ['admin-parking-place-selection-component.component.css'],
})
export class AdminParkingPlaceSelectionComponent implements OnInit {
  @Input()
  adminParkingPlacesPlaceNumber: string = '{0}.'
  @Input()
  rootClassName: string = ''
  @Input() spot: any;
  @Input() categories: any;
  @Input() adminParkingPlaceAssignedBike = 'Assigned Bike: {0}'
  @Input() parkingPlaceGeneralSelection = 'None'

  selectedCategories: any[] = [];
  assignedBikeStatus: string = '';
  bikeId: number = -1;

  @Output() onDataChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSpotDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onNewlyCreatedSpotDelete: EventEmitter<any> = new EventEmitter<any>();

  popupDescription = 'Do you really want to delete the parking place? Assigned available bikes will be unassigned!'


  constructor(private spotService: ParkingspotService, private popupService: PopupService) {

  }

  ngOnInit(): void {
    console.log(this.spot)
    if (this.spot) {
      this.adminParkingPlacesPlaceNumber = `${this.spot.spot_number}.`;
      this.selectedCategories = this.spot.categories;
      this.fetchAssignedBike();
    }
  }

  handleSelectionChange() {
    this.onDataChange.emit({...this.spot, categories: this.selectedCategories});
    console.log("Selected categories: ", this.selectedCategories)
  }

  fetchAssignedBike() {
    if (this.spot.spot_id) {
      this.spotService.fetchAssignedBike(this.spot.spot_id).subscribe({
        next: (val) => {
          console.log(val);
          this.adminParkingPlaceAssignedBike = 'Assigned Bike: ' + val[0].bike_name;
          this.bikeId = val[0].bike_id;
          this.assignedBikeStatus = val[0].status;
        },
        error: (err) => {
          if (err.status === 404) this.adminParkingPlaceAssignedBike = 'Assigned Bike: None';
          else console.log("Error while fetching assigned bike: ", err)

        }
      })
    } else this.adminParkingPlaceAssignedBike = 'Assigned Bike: None';
  }


  handleParkingPlaceDeletion() {
    if ((this.assignedBikeStatus && (this.assignedBikeStatus === 'Available' || this.assignedBikeStatus === 'Maintenance')) || !this.assignedBikeStatus) {
      this.popupService.openPopup(this.popupDescription).subscribe({
        next: (result) => {
          if (result) this.executeDeletionQuery()
        },
      })
    } else alert('The bike is currently not available!')
  }

  executeDeletionQuery() {
    if (this.spot.spot_id) {
      if (this.bikeId > 0) {
        this.spotService.deleteParkingSpotWithBikeId(this.spot.spot_id, this.bikeId).subscribe({
          next: (val) => {
            this.onSpotDelete.emit();
            console.log(val)
          },
          error: (err) => console.log("Error while deleting parking spot: ", err)
        })
      } else {
        this.spotService.deleteParkingSpot(this.spot.spot_id).subscribe({
          next: (val) => {
            this.onSpotDelete.emit();
            console.log(val)
          },
          error: (err) => console.log("Error while deleting parking spot: ", err)
        })
      }
    } else { // Newly created spot gets deleted
      this.onNewlyCreatedSpotDelete.emit(this.spot.created_spot);
    }
  }
}
