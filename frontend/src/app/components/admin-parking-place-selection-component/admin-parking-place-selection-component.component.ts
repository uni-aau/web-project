import {Component, Input, OnInit} from '@angular/core'

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

  @Input() parkingPlaceGeneralSelection = 'None'


  constructor() {

  }

  handleSelectionChange(event: any) {

  }

  ngOnInit(): void {
    console.log(this.spot)
    if(this.spot) {
      this.adminParkingPlacesPlaceNumber = `${this.spot.spot_number}.`
    }
  }
}
