import { Component, Input } from '@angular/core'
import {CategoryService} from "../../services/category.service";
import {PopupService} from "../../services/popup.service";

@Component({
  selector: 'admin-categories-management',
  templateUrl: 'admin-categories-management.component.html',
  styleUrls: ['admin-categories-management.component.css'],
})
export class AdminCategoriesManagement {
  @Input()
  adminManageCategoriesTitle: string = 'Categories Management'
  @Input()
  rootClassName: string = ''

  categories: any[] = [];
  filteredCategories: any[] = [];

  constructor(private categoryService: CategoryService, private popupService: PopupService) {
    this.categories = [];
    this.fetchCategories();
  }

  fetchCategories() {

  }

  performSearch() {

  }

  performCreate() {

  }

  handleCategoryDelete(){

  }

  handleUpdatedCategory() {
    this.fetchCategories();
  }
}
