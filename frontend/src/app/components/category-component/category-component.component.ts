import { Component, Input } from '@angular/core'

@Component({
  selector: 'category-component',
  templateUrl: 'category-component.component.html',
  styleUrls: ['category-component.component.css'],
})
export class CategoryComponent {
  @Input()
  categoryAssignedModels: string = 'Assigned Models: %s'
  @Input()
  rootClassName: string = ''
  @Input()
  categoryStatusAvaiability: string = 'Status: %s'
  @Input()
  categoryPrice: string = 'Price: %s'
  @Input()
  categoryName: string = '%s'
  constructor() {}
}
