import {Component, Input} from '@angular/core'

@Component({
    selector: 'home-bikes',
    templateUrl: 'home-bikes.component.html',
    styleUrls: ['home-bikes.component.css'],
})
export class HomeBikes {
    @Input()
    homeBikesImageSrc1: string = '/assets/roadbike-200h.png'
    @Input()
    homeBikesImageAlt4: string = 'image'
    @Input()
    homeBikesImageAlt1: string = 'image'
    @Input()
    homeBikesImageSrc3: string = '/assets/tourbike-200h.png'
    @Input()
    homeBikesTitle4: string = 'E-Bikes'
    @Input()
    homeBikesText2: string = 'Rugged and versatile, designed for off-road trails.'
    @Input()
    homeBikesText3: string = 'Durable and comfortable, ideal for long journeys.'
    @Input()
    homeBikesImageSrc4: string = '/assets/ebike-200h.png'
    @Input()
    homeBikesTitle3: string = 'Tour Bikes'
    @Input()
    homeBikesImageAlt2: string = 'image'
    @Input()
    homeBikesText4: string = 'Effortless riding with electric power assistance.'
    @Input()
    homeBikesImageAlt3: string = 'image'
    @Input()
    rootClassName: string = ''
    @Input()
    homeBikesText1: string = 'Sleek and fast, perfect for pavement riding.'
    @Input()
    homeBikesTitle2: string = 'Offroad Bikes'
    @Input()
    homeBikesImageSrc2: string = '/assets/offroadbike-200h.png'
    @Input()
    homeBikesTitle1: string = 'Road Bikes'

    constructor() {
    }
}
