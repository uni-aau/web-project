import {Component, Input} from '@angular/core'
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
        this.categoryService.getCategories().subscribe({
            next: (res) => {
                this.categories = res;
                this.performSearch("");
            },
            error: (err) => {
                if (err.status === 404) this.categories = [];
                console.log(err.error);
            }
        })
    }

    performSearch(searchTerm: string) {
        if (!searchTerm) {
            this.filteredCategories = this.categories;
        } else {
            this.categories = this.categories.filter(category => {
                category.category_name.toLowerCase().includes(searchTerm.toLowerCase())
            });
        }
    }


    performCreate() {
            // TODO
    }

    handleCategoryDelete() {
        this.fetchCategories();
    }

    handleUpdatedCategory() {
        this.fetchCategories();
    }
}
