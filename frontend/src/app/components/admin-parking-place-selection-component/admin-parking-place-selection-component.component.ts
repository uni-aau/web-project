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

  selectedCategories: any[] = [];

  // selectedCategories = [{ category_id: 1, category_name: 'Category 1' }, { category_id: 2, category_name: 'Category 2' }];
  constructor() {

  }
  ngOnInit(): void {
    console.log(this.spot)
    if(this.spot) {
      this.adminParkingPlacesPlaceNumber = `${this.spot.spot_number}.`;
      // this.selectedCategories = [1, 2]
      this.selectedCategories = this.spot.categories;
      // this.selectedCategories =  this.selectedCategories = this.spot.categories.map(spotCategory => this.categories.find(category => category.category_id === spotCategory.category_id));
    }
  }

  handleSelectionChange(event: any) {
    console.log(this.selectedCategories)
  }


  handleParkingPlaceDeletion() {
    console.log("Test")
  }
}
