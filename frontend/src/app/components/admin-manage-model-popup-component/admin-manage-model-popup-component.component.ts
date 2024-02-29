import {Component, Inject, Input} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'admin-manage-model-popup-component',
  templateUrl: 'admin-manage-model-popup-component.component.html',
  styleUrls: ['admin-manage-model-popup-component.component.css'],
})
export class AdminManageModelPopupComponent {
  @Input()
  adminManageModelLabelAssignModels: string = 'Assign Category'
  @Input()
  manageModelAssignModelErrorHint: string = ''
  @Input()
  manageModelNameErrorHint: string = ''
  @Input()
  manageModelPriceErrorHint: string = ''
  @Input()
  adminManageModelInputPlaceholderName: string = 'Enter name'
  @Input()
  adminManageModelInputPlaceholderPrice: string = 'Price'
  @Input()
  adminManageModelLabelPrice: string = 'Price'
  @Input()
  adminManageModelLabelName: string = 'Model Name'
  @Input()
  adminManageModelTitle: string = 'Manage Model'

  modelName: string = '';
  modelPrice: number | undefined;
  categoryId: number = -1;
  bikeCategories: any[] = [];
  adminManageModelSelectorGeneralSelection = 'Select Category';

  constructor(public dialogRef: MatDialogRef<AdminManageModelPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private categoryService: CategoryService) {
    if (data) this.fillInputs();
    this.fetchCategories();
  }

  fillInputs() {
    this.modelName = this.data.modelName;
    this.modelPrice = this.data.modelPrice;
  }

  fetchCategories() {
    this.categoryService.getCategories().subscribe({
      next: (val) => this.bikeCategories = val,
      error: (err) => {
        if (err.status === 404) this.bikeCategories = [];
        console.log(err.error);
      }
    })
  }

  handleConfirm() {
    if (!this.modelName.trim()) {
      this.manageModelNameErrorHint = 'Enter valid name';
      return;
    }
    this.manageModelNameErrorHint = '';

    if (!this.modelPrice || this.modelPrice <= 0 || this.modelPrice >= 20000) {
      this.manageModelPriceErrorHint = 'Enter valid price';
      return;
    }
    this.manageModelPriceErrorHint = '';

    if (this.categoryId === -1) {
      this.manageModelAssignModelErrorHint = 'Select a valid model';
      return;
    }
    this.manageModelAssignModelErrorHint = '';

    this.dialogRef.close({modelName: this.modelName, modelPrice: this.modelPrice, categoryId: this.categoryId});
  }

  handleCancel() {
    this.dialogRef.close();
  }

  handleSelect(event: any) {
    const categoryId = event.target.value;

    if (categoryId && categoryId != -1) {
      this.categoryId = categoryId;
    }
  }
}
