import {Component, Input} from '@angular/core'
import {BikeService} from "../../services/bike.service";
import {ModelService} from "../../services/model.service";
import {CategoryService} from "../../services/category.service";
import {PopupService} from "../../services/popup.service";
import {ActivatedRoute} from "@angular/router";
import {LanguageHandler} from "../../handler/LanguageHandler";

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

  bikes: any[] = [];
  filteredBikes: any[] = [];
  models: any[] = [];
  filteredModels: any[] = [];
  categories: any[] = [];
  filteredCategories: any[] = [];
  currentSelection: string | null = null;

  constructor(private bikeService: BikeService,
              private modelService: ModelService,
              private categoryService: CategoryService,
              private popupService: PopupService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.fetchData()
  }

  filterInput(input: string) {
    this.filteredBikes = this.bikes.filter((bike: any) => {
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
          this.bookingLabelSearch = LanguageHandler.formatString(this.bookingLabelSearch, [navigation.station.station_address, navigation.station.station_name])
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
        this.filteredModels = res;
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
        this.filteredCategories = res;
        console.log(this.categories)
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
      this.filteredModels = this.models;
      this.filteredCategories = this.categories;
    } else {
      this.filteredBikes = this.bikes.filter(bike => bike.bike_name.toLowerCase().includes(searchTerm.toLowerCase()));
      this.filteredCategories = this.categories.filter(category => category.category_name.toLowerCase().includes(searchTerm.toLowerCase()));
      this.filteredModels = this.models.filter(model => model.model_name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
  }

  selectComponent(componentName: string) {
    if (this.currentSelection === componentName) {
      this.currentSelection = null;
    } else {
      this.currentSelection = componentName;
    }
  }

  performBook($event: any) {
  }
}
