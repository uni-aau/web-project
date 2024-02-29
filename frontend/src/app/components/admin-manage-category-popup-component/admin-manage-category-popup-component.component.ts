import {Component, Inject, Input} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'admin-manage-category-popup-component',
  templateUrl: 'admin-manage-category-popup-component.component.html',
  styleUrls: ['admin-manage-category-popup-component.component.css'],
})
export class AdminManageCategoryPopupComponent {
  @Input()
  adminManageCategoryNameErrorText: string = ''
  @Input()
  adminManageCategoryPriceErrorText: string = ''
  @Input()
  adminManageCategoryLabelPrice: string = 'Price'
  @Input()
  adminManageCategoryLabelName: string = 'Category Name'
  @Input()
  adminManageCategoryInputPlaceholderPrice: string = 'Price'
  @Input()
  adminManageCategoryInputPlaceholderName: string = 'Enter name'
  @Input()
  adminManageCategoryTitle: string = 'Manage Category'

  categoryName: string = '';
  categoryPrice: number | undefined;

  constructor(public dialogRef: MatDialogRef<AdminManageCategoryPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) this.fillInputs();
  }

  handleCancel() {
    this.dialogRef.close();
  }

  handleConfirm() {
    if (!this.categoryName.trim()) {
      this.adminManageCategoryNameErrorText = 'Enter valid name';
      return;
    }
    this.adminManageCategoryNameErrorText = '';

    if (!this.categoryPrice || this.categoryPrice <= 0 || this.categoryPrice >= 20000) {
      this.adminManageCategoryPriceErrorText = 'Enter valid category price';
      return
    }
    this.adminManageCategoryPriceErrorText = '';


    this.dialogRef.close({categoryName: this.categoryName, categoryPrice: this.categoryPrice});
  }

  fillInputs() {
    this.categoryName = this.data.categoryName;
    this.categoryPrice = this.data.categoryPrice;
  }
}
