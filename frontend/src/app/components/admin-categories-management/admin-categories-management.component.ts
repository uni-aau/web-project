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
        this.popupService.openCreateCategoryPopup().subscribe({
            next: (val) => {
                if (val) {
                    this.categoryService.addCategory(val.categoryName, val.categoryPrice).subscribe({
                        next: (val) => {
                            if (val.success) {
                                console.log(val);
                                this.fetchCategories();
                            }
                        },
                        error: (err) => console.log(err)
                    })
                }
            },
            error: (err) => console.log(err)
        })
    }

    handleCategoryDelete() {
        this.fetchCategories();
    }

    handleUpdatedCategory() {
        this.fetchCategories();
    }
}
