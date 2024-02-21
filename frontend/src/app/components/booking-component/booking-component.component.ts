import { Component, Input } from '@angular/core'
import {BikeService} from "../../services/bike.service";
import {ModelService} from "../../services/model.service";
import {CategoryService} from "../../services/category.service";
import {PopupService} from "../../services/popup.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {ActivatedRoute, Router} from "@angular/router";
import {filter} from "rxjs";

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
  filteredBikes: any;
  models: any;
  categories: any;
  currentSelection: string | null = null;
  constructor(private bikeService:BikeService,
              private modelService:ModelService,
              private categoryService:CategoryService,
              private popupService:PopupService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.fetchData()
  }

  filterInput(input:string){
    this.filteredBikes = this.bikes.filter((bike:any) => {
      return bike.station_name === input;
    })
  }

  fetchData() {
    this.bikeService.fetchBikes().subscribe({
      next: (res) => {
        this.bikes = res;
        const navigation = window.history.state;
        console.log(navigation.station.station_name)
        if (navigation.station && navigation.station.station_name) {
          this.filterInput(navigation.station.station_name)
        }
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

  performBook($event: any) {
    // this.popupService.openBookTicketPopup("category", "bikeName", 123).subscribe({
    //   next: (val) => {
    //
    //   },
    //   error: (err) => console.log(err)
    //   }
    // )
  }
}
