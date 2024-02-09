import { Component, Input } from '@angular/core'

@Component({
  selector: 'image-upload-preview-component',
  templateUrl: 'image-upload-preview-component.component.html',
  styleUrls: ['image-upload-preview-component.component.css'],
})
export class ImageUploadPreviewComponent {
  @Input()
  adminManageBikeStationImageSrc: string = '/assets/no-image.svg'
  @Input()
  adminManageBikeStationButtonUpload: string = 'Upload'
  @Input()
  imageAlt3: string = 'image'
  @Input()
  adminManageBikeStationButtonDelete: string = 'Delete'
  constructor() {}
}
