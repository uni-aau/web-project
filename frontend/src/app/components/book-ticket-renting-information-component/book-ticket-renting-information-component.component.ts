import { Component, Input } from '@angular/core'

@Component({
  selector: 'book-ticket-renting-information-component',
  templateUrl: 'book-ticket-renting-information-component.component.html',
  styleUrls: ['book-ticket-renting-information-component.component.css'],
})
export class BookTicketRentingInformationComponent {
  @Input()
  rootClassName: string = ''
  @Input()
  textinputPlaceholder2: string = 'placeholder'
  @Input()
  text11: string = 'Select Rent Duration'
  @Input()
  text1: string = 'Select Rent Date'
  @Input()
  textinputPlaceholder21: string = 'placeholder'
  constructor() {}
}
