import {Component, EventEmitter, Input, Output} from '@angular/core'
import {LanguageHandler} from "../../handler/LanguageHandler";
import {PopupService} from "../../services/popup.service";
import {CategoryService} from "../../services/category.service";
import {TicketService} from "../../services/ticket.service";
import {TicketUtilityService} from "../../services/ticket.utility.service";

@Component({
    selector: 'category-component',
    templateUrl: 'category-component.component.html',
    styleUrls: ['category-component.component.css'],
})
export class CategoryComponent {
    @Input()
    categoryHintSubtitle: string =
        'Receive a randomly selected bike of this category'
    @Input()
    categoryAssignedModels: string = 'Assigned Models: {0}'
    @Input()
    rootClassName: string = ''
    @Input()
    categoryPrice: string = 'Price: {0}'
    @Input()
    categoryName: string = '{0}'
    @Input()
    categoryData: any | undefined;
    @Input()
    showAdminButtons: boolean = true;
    @Input()
    visibleBookButton: boolean = false;

    deleteCategoryPopupText = 'Do you really want to delete the category?'
    categoryId = -1;

    @Output() onCategoryDelete: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCategoryUpdate: EventEmitter<any> = new EventEmitter<any>();

    constructor(private popupService: PopupService, private categoryService: CategoryService,
                private ticketService:TicketService, private ticketUtilyService:TicketUtilityService) {
    }

    ngOnInit() {
        this.insertData();
    }

    insertData() {
        if (this.categoryData) {
            this.categoryId = this.categoryData.category_id;
            this.categoryPrice = LanguageHandler.formatString("Price: {0}$", [this.categoryData.price])
            this.categoryName = this.categoryData.category_name;

            if (this.categoryData.model_name) {
                this.categoryAssignedModels = "Assigned Models: ".concat(this.categoryData.models.join(', '));
            } else this.categoryAssignedModels = "Assigned Models: - ";
        }
    }

    handleButtonClicked(event: any) {
        if (event === 'delete') this.deleteCategory();
        else if (event === 'update') this.updateCategory();
    }

    deleteCategory() {
        if (!this.categoryData.model_name) {
            this.popupService.openPopup(this.deleteCategoryPopupText)
                .subscribe(result => {
                    if (result) this.executeDeletionQuery();
                })
        } else {
            alert("There are currently models assigned") // TODO reset with actual snackbar
        }
    }

    executeDeletionQuery() {
        this.categoryService.deleteCategory(this.categoryId).subscribe({
            next: (res) => {
                if (res.success) {
                    this.onCategoryDelete.emit(this.categoryId);
                } else {
                    console.log("Error, deletion was not successful: ", res);
                }
            },
            error: (err) => console.log(`Error while deleting category ${this.categoryId}:`, err)
        })
    }

    updateCategory() {
        this.popupService.openUpdateCategoryPopup(this.categoryData.category_name, this.categoryData.price).subscribe({
            next: (val) => {
                if (val) this.executeUpdateQuery(val);
            },
            error: (err) => console.log(err)
        })
    }

    executeUpdateQuery(val: any) {
        this.categoryService.updateCategory(this.categoryId, val.categoryName, val.categoryPrice).subscribe({
            next: (val) => {
                if (val.success) {
                    console.log(val);
                    this.onCategoryUpdate.emit(this.categoryId);
                }
            },
            error: (err) => console.log(err)
        })
    }

  performBook($event: MouseEvent) {
    console.log(this.categoryData)
    const dialogRef = this.popupService.openBookTicketPopup(this.categoryData.category_name, " " ,this.categoryData.price)


    dialogRef.subscribe(result => {
      if (result) {
        const { price, status, bookingDate, rentingStart, endDate } = result;

        // Todo bookType muss festgelegt werden + für history muss es bike/category/model copy geben
        // damit die löschbar sind
        this.ticketService.newTicket(
          price,
          "Model",
          undefined,
          undefined,
          this.categoryData.category_id,
          status,
          bookingDate,
          rentingStart,
          endDate
        ).subscribe({
          next: (response) => {
            console.log('Buchung erfolgreich', response);
          },
          error: (error) => {
            console.error('Fehler bei der Buchung', error);
          }
        });
      }
    });
  }
}
