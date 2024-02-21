import { Component, Input } from '@angular/core'
import {BikeService} from "../../services/bike.service";
import {ModelService} from "../../services/model.service";
import {CategoryService} from "../../services/category.service";

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
  models: any;
  categories: any;
  currentSelection: string | null = null;
  constructor(private bikeService:BikeService, private modelService:ModelService, private categoryService:CategoryService) {}

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
    this.modelService.getModels().subscribe({
      next: (res) => {
        this.models = res;
        console.log(this.models)
      },
      error: (err) => {
        if (err.status === 404) this.bikes = [];
        console.log(err.error);
      }
    })
    this.categoryService.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
        console.log(this.categories)
      },
      error: (err) => {
        if (err.status === 404) this.bikes = [];
        console.log(err.error);
      }
    })
  }

  performSearch($event: string) {

  }

  selectComponent(componentName: string) {
    if (this.currentSelection === componentName) {
      this.currentSelection = null;
    } else {
      this.currentSelection = componentName;
    }
  }
}
