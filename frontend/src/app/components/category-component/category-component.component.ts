import { Component, Input } from '@angular/core'

@Component({
  selector: 'category-component',
  templateUrl: 'category-component.component.html',
  styleUrls: ['category-component.component.css'],
})
export class CategoryComponent {
  @Input()
  categoryAssignedModels: string = 'Assigned Models: {0}'
  @Input()
  rootClassName: string = ''
  @Input()
  categoryStatusAvaiability: string = 'Status: {0}'
  @Input()
  categoryPrice: string = 'Price: {0}'
  @Input()
  categoryName: string = '{0}'
  @Input()
  categoryHintSubtitle: string =
    'Receive a randomly selected bike of this category'
  constructor() {}
}
