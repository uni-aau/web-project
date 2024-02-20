import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {BikeService} from "../../services/bike.service";
import {PopupService} from "../../services/popup.service";
import {LanguageHandler} from "../../handler/LanguageHandler";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'bike-component',
  templateUrl: 'bike-component.component.html',
  styleUrls: ['bike-component.component.css'],
})
export class BikeComponent implements OnInit {
  @Input()
  bikeAssignedStation: string = 'Assigned Bike Station: {0}'
  @Input()
  rootClassName: string = ''
  @Input()
  bikeBikeName: string = '{0}'
  @Input()
  bikeStatusText: string = 'Status: '
  @Input()
  bikeStatus: string = '{0}'
  @Input()
  bikeModel: string = 'Model: {0}'
  @Input()
  bikePrice: string = 'Price: {0}$'
  @Input()
  bikeImageSrc: string = '/assets/no-image.svg'
  @Input()
  bikeSize: string = 'Size: {0}'
  @Input()
  bikeCategory: string = 'Category: {0}'
  @Input()
  bikeImageAlt: string = 'More Infos'
  @Input()
  bikeStatusColor: string = ''

  @Input()
  visibleBookButton: boolean = true;
  @Input()
  visibleAdminButtons: boolean = true;

  unassignedBikeText = "Unassigned";
  bikeId = -1;
  deleteBikePopupDescription = "Do you really want to delete the bike?";

  @Input()
  bikeData: any | undefined;

  @Output() onBikeDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor(private bikeService: BikeService, private popupService: PopupService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.insertData();
  }

  insertData() {
    if (this.bikeData) {
      console.log(this.bikeData)
      this.bikeBikeName = this.bikeData.bike_name;
      this.bikeId = this.bikeData.bike_id;
      this.bikeImageSrc = this.bikeData.bike_image_location;
      this.bikeSize = LanguageHandler.formatString("Size: {0}", [this.bikeData.size]);
      this.bikePrice = LanguageHandler.formatString("Price: {0}$", [this.bikeData.price])
      this.bikeModel = LanguageHandler.formatString("Model: {0}", [this.bikeData.model_name]);
      this.bikeCategory = LanguageHandler.formatString("Category: {0}", [this.bikeData.category_name]);

      if (this.bikeData.assigned_to) this.bikeAssignedStation = LanguageHandler.formatString("Assigned Bike Station: {0}", [this.bikeData.station_name])
      else this.bikeAssignedStation = LanguageHandler.formatString("Assigned Bike Station: {0}", [this.unassignedBikeText])

      this.formatStatus();


    }
  }

  formatStatus() {
    this.bikeStatus = this.bikeData.status;
    this.bikeStatusColor = this.bikeData.status === 'Available' ? 'green' : 'red';
  }

  deleteBike() {
    this.popupService.openPopup(this.deleteBikePopupDescription)
      .subscribe(result => {
        if (result) {
          console.log("User confirmed action")
          this.bikeService.deleteBike(this.bikeId).subscribe({
            next: (res) => {
              if (res.success) {
                this.onBikeDelete.emit(this.bikeId);
              } else {
                console.log("Error, deletion was not successful: ", res);
              }
            },
            error: (err) => console.log(`Error while deleting bike ${this.bikeId}:`, err)
          })
        } else console.log("User canceled action");
      })
  }


}
