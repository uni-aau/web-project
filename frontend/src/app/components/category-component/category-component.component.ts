import { Component, Input } from '@angular/core'
import {LanguageHandler} from "../../handler/LanguageHandler";

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
  constructor() {}

  ngOnInit() {
    this.insertData();
  }

  insertData() {
    if (this.categoryData) {
      console.log(this.categoryData)
      this.categoryPrice = LanguageHandler.formatString("Price: {0}$", [this.categoryData.price])
      this.categoryName = this.categoryData.category_name;
      this.categoryAssignedModels = "Assigned Models: ".concat(this.categoryData.model_name);
    }
  }

  handleButtonClicked(event: any) {
  }
}
