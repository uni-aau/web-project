import { Component, Input } from '@angular/core'

@Component({
  selector: 'map-component',
  templateUrl: 'map-component.component.html',
  styleUrls: ['map-component.component.css'],
})
export class MapComponent {
  @Input()
  rootClassName: string = ''
  constructor() {}
}
