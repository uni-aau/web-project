import { Component, Input } from '@angular/core'

@Component({
  selector: 'model-component',
  templateUrl: 'model-component.component.html',
  styleUrls: ['model-component.component.css'],
})
export class ModelComponent {
  @Input()
  modelPrice: string = 'Price: %s'
  @Input()
  modelStatusAvailbility: string = 'Status: %s'
  @Input()
  modelName: string = '%s'
  @Input()
  rootClassName: string = ''
  @Input()
  modelAssignedToCategory: string = 'Assigned to: %s'
  constructor() {}
}
