import { Component, Input } from '@angular/core'

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
  constructor() {}
}
