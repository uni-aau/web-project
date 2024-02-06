import { Component, Input } from '@angular/core'

@Component({
  selector: 'rating-component',
  templateUrl: 'rating-component.component.html',
  styleUrls: ['rating-component.component.css'],
})
export class RatingComponent {
  @Input()
  ratingTitle: string = 'Du Hurensohn'
  @Input()
  imageAlt: string = 'image'
  @Input()
  ratingUserProfilePicture: string =
    'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  ratingUsername: string = '%s'
  @Input()
  rootClassName: string = ''
  @Input()
  ratingButtonDelete: string = 'Delete'
  @Input()
  ratingDescription: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam porttitor nulla vitae rhoncus. Aenean fringilla erat at neque congue, nec posuere elit finibus. Aliquam imperdiet, ex a maximus commodo, eros augue efficitur nisi, et volutpat neque ipsum eget sem. Phasellus pretium dui iaculis ante feugiat, non condimentum sem commodo. Curabitur laoreet mattis ullamcorper. Sed ac sem augue. Duis tincidunt sapien sit amet facilisis sodales. Ut gravida eget odio consectetur consequat. Phasellus semper, mi in sagittis iaculis, tortor metus commodo mi, non convallis sapien massa vel quam. Sed pulvinar odio in tincidunt ullamcorper. Sed mattis porta commodo. Cras in scelerisque neque. Aenean orci nunc, volutpat rutrum orci vitae, consectetur faucibus tortor. Morbi porttitor nec mauris id ultricies.'
  @Input()
  ratingDate: string = '(Rating from: %s)'
  constructor() {}
}
