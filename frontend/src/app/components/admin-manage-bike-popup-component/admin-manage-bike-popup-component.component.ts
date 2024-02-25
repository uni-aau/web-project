import {Component, Inject, Input} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModelService} from "../../services/model.service";

@Component({
    selector: 'admin-manage-bike-popup-component',
    templateUrl: 'admin-manage-bike-popup-component.component.html',
    styleUrls: ['admin-manage-bike-popup-component.component.css'],
})
export class AdminManageBikePopupComponent {
    @Input()
    adminManageBikeLabelAssignModels: string = 'Assign Model'
    @Input()
    rootClassName: string = ''
    @Input()
    adminManageBikeTitle: string = 'Manage Bike'
    @Input()
    adminManageBikeInputPlaceholderSize: string = 'Bike Size'
    @Input()
    adminManageBikeInputPlaceholderPrice: string = 'Enter Price'
    @Input()
    adminManageBikeStatus: string = 'Operational'
    @Input()
    adminManageBikeLabelSize: string = 'Bike Size'
    @Input()
    adminManageBikeLabelPrice: string = 'Price'
    @Input()
    adminManageBikeImageTitle: string = 'Bike Image'
    @Input()
    adminManageBikeLabelName1: string = 'Bike Name'
    @Input()
    adminManageBikeInputPlaceholderName: string = 'Bike Name'
    @Input()
    adminManageBikeNameError: string = ''
    @Input()
    adminManageBikeSizeError: string = ''
    @Input()
    adminManageBikePriceError: string = ''
    @Input()
    adminManageBikeModelError: string = ''
    @Input()
    adminManageBikeCheckboxError: string = ''

    @Input()
    adminManageBikeSelectorGeneralSelection: string = 'Select Model'

    bikeName: string = '';
    bikeSize: number | undefined;
    bikePrice: number | undefined;
    isOperational: boolean = true; // Default value
    imageLink: string | undefined; // TODO

    bikeModels: any[] = [];
    modelId: number = -1;

    constructor(public dialogRef: MatDialogRef<AdminManageBikePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private modelService: ModelService) {
        if (data) {
            this.fillInputs();
        }
        this.fetchModels();

    }

    handleCancel() {
        this.dialogRef.close();
    }

    handleConfirm() {
        if (!this.bikeName.trim()) {
            this.adminManageBikeNameError = 'Enter valid name';
            return;
        }
        this.adminManageBikeNameError = '';

        if (!this.bikeSize || this.bikeSize <= 0 || this.bikeSize >= 20000) {
            this.adminManageBikeSizeError = 'Enter valid bike size';
            return;
        }
        this.adminManageBikeSizeError = '';

        if (!this.bikePrice || this.bikePrice <= 0 || this.bikePrice >= 20000) {
            this.adminManageBikePriceError = 'Enter valid bike price';
            return;
        }
        this.adminManageBikePriceError = '';

        if (this.modelId === -1) {
            this.adminManageBikeModelError = 'Select a valid model';
            return;
        }
        this.adminManageBikeModelError = '';

        // Only check checkbox if data exists (update button was pressed)
        if (this.data) {
            if (this.isOperational && (this.data.bikeStatus != 'Available' && this.data.bikeStatus != 'Maintenance')) {
                this.adminManageBikeCheckboxError = 'Bike is currently used';
                return;
            }
            this.adminManageBikeCheckboxError = '';
        }

        this.dialogRef.close({bikeName: this.bikeName, bikePrice: this.bikePrice, bikeSize: this.bikeSize, isOperational: this.isOperational, imageLink: this.imageLink, modelId: this.modelId})
    }


    fillInputs() {
        this.bikeName = this.data.bikeName;
        this.bikePrice = this.data.bikePrice;
        this.bikeSize = this.data.bikeSize;
        this.imageLink = this.data.imageLink;
        this.isOperational = this.data.bikeStatus === 'Available'
    }

    fetchModels() {
        this.modelService.getModels().subscribe({
            next: (val) => this.bikeModels = val,
            error: (err) => {
                if (err.status === 404) this.bikeModels = [];
                console.log(err.error);
            }
        })
    }

    handleSelect(event: any) {
        const modelId = event.target.value;

        if (modelId && modelId != -1) {
            this.modelId = modelId;
        }
    }
}
