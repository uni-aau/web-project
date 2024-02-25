import {Component, Input} from '@angular/core'

@Component({
    selector: 'book-ticket-renting-information-component',
    templateUrl: 'book-ticket-renting-information-component.component.html',
    styleUrls: ['book-ticket-renting-information-component.component.css'],
})
export class BookTicketRentingInformationComponent {
    @Input()
    rootClassName: string = ''
    @Input()
    bookTicketRentingInformationInputPlaceholderRentDate: string = 'placeholder'
    @Input()
    bookTicketRentingInformationLabelRentDuration: string = 'Select Rent Duration'
    @Input()
    bookTicketLabelRentingInformation: string = 'Select Rent Date'
    @Input()
    bookTicketInputPlaceholderRentingInformation: string = 'placeholder'

    constructor() {
    }
}
