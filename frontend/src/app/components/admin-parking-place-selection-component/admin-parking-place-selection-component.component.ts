import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {ParkingspotService} from "../../services/parkingspot.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'admin-parking-place-selection-component',
  templateUrl: 'admin-parking-place-selection-component.component.html',
  styleUrls: ['admin-parking-place-selection-component.component.css'],
})
export class AdminParkingPlaceSelectionComponent implements OnInit{
  @Input()
  adminParkingPlacesPlaceNumber: string = '{0}.'
  @Input()
  rootClassName: string = ''
  @Input() spot: any;
  @Input() categories: any;
  @Input() adminParkingPlaceAssignedBike = 'Assigned Bike: {0}'
  @Input() parkingPlaceGeneralSelection = 'None'

  selectedCategories: any[] = [];

  @Output() onDataChange : EventEmitter<any> = new EventEmitter<any>();


  constructor(private spotService: ParkingspotService) {

  }
  ngOnInit(): void {
    console.log(this.spot)
    if(this.spot) {
      this.adminParkingPlacesPlaceNumber = `${this.spot.spot_number}.`;
      this.selectedCategories = this.spot.categories;
      this.fetchAssignedBike();
    }
  }

  handleSelectionChange() {
    this.onDataChange.emit({ ...this.spot, categories: this.selectedCategories });
    console.log(this.selectedCategories)
  }

  fetchAssignedBike() {
    this.spotService.fetchAssignedBike(this.spot.spot_id).subscribe({
      next: (val) => {
        console.log(val);
        this.adminParkingPlaceAssignedBike = 'Assigned Bike: ' + val[0].bike_name
      },
      error: (err) => {
        if(err.status === 404) this.adminParkingPlaceAssignedBike = 'Assigned Bike: None';
        else console.log("Error while fetching assigned bike: ", err)

    }
    })
  }


  handleParkingPlaceDeletion() {
    console.log("Test")
  }
}
