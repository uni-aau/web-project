import {Component, Input} from '@angular/core'

@Component({
    selector: 'image-upload-preview-component',
    templateUrl: 'image-upload-preview-component.component.html',
    styleUrls: ['image-upload-preview-component.component.css'],
})
export class ImageUploadPreviewComponent {
    @Input()
    uploadImagePreviewImageSrc: string = '/assets/no-image.svg'
    @Input()
    uploadImagePreviewButtonUpload: string = 'Upload'
    @Input()
    uploadImagePreviewImageAlt: string = 'image'
    @Input()
    uploadImagePreviewButtonDelete: string = 'Delete'

    constructor() {
    }
}
