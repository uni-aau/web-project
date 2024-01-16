import {Component, Input} from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {ComponentsModule} from "../../components/components.module";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ComponentsModule, NgOptimizedImage],
  templateUrl: 'login.component.html',
  styleUrl: './login.component.css',
})

export class Login {
  @Input()
  image_src: string = '../../../assets/image.png'
  @Input()
  image_alt: string = 'image'
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Login - Diligent Jam Packed Wallaby')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Login - Diligent Jam Packed Wallaby',
      },
    ])
  }
}
