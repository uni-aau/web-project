import { Component, Input } from '@angular/core'
import {LanguageHandler} from "../../handler/LanguageHandler";

@Component({
  selector: 'model-component',
  templateUrl: 'model-component.component.html',
  styleUrls: ['model-component.component.css'],
})
export class ModelComponent {
  @Input()
  modelHintSubtitle: string =
    'Receive a randomly selected bike of the booked model'
  @Input()
  modelPrice: string = 'Price: {0}'
  @Input()
  modelName: string = '{0}'
  @Input()
  rootClassName: string = ''
  @Input()
  modelAssignedToCategory: string = 'Assigned to: {0}'
  @Input()
  modelData: any | undefined;
  constructor() {}

  ngOnInit() {
    this.insertData();
  }

  insertData() {
    if (this.modelData) {
      console.log(this.modelData)
      this.modelPrice = LanguageHandler.formatString("Price: {0}$", [this.modelData.price])
      this.modelName = this.modelData.model_name;
      this.modelAssignedToCategory = "Category: ".concat(this.modelData.category_name);
    }
  }
}
