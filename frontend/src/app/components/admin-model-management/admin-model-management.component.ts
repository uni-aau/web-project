import {Component, Input} from '@angular/core'
import {ModelService} from "../../services/model.service";
import {PopupService} from "../../services/popup.service";

@Component({
    selector: 'admin-model-management',
    templateUrl: 'admin-model-management.component.html',
    styleUrls: ['admin-model-management.component.css'],
})
export class AdminModelManagement {
    @Input()
    adminModelsManagement: string = 'Models Mangement'
    @Input()
    rootClassName: string = ''

    models: any[] = [];
    filteredModels: any[] = [];

    constructor(private modelService: ModelService, private popupService: PopupService) {
        this.models = [];
        this.fetchModels();
    }

    fetchModels() {
        this.modelService.getModels().subscribe({
            next: (res) => {
                this.models = res;
                this.performSearch("");
            },
            error: (err) => {
                if (err.status === 404) this.models = [];
                console.log(err.error);
            }
        })
    }

    performSearch(searchTerm: string) {
        if (!searchTerm) {
            this.filteredModels = this.models;
        } else {
            this.filteredModels = this.models.filter(model => {
                return model.model_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    model.category_name.toLowerCase().includes(searchTerm.toLowerCase());
            });
        }
    }

    performCreate() {
        this.popupService.openCreateModelPopup().subscribe({
            next: (val) => {
                if (val) {
                    this.modelService.addModel(val.modelName, val.modelPrice, val.categoryId).subscribe({
                        next: (val) => {
                            if (val.success) {
                                console.log(val);
                                this.fetchModels();
                            }
                        },
                        error: (err) => console.log(err)
                    })
                }
            },
            error: (err) => console.log(err)
        })
    }

    handleModelDelete() {
        this.fetchModels();
    }

    handleModelUpdate() {
        this.fetchModels();
    }


}
