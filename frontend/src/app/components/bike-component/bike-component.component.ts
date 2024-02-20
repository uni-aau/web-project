import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {BikeService} from "../../services/bike.service";
import {PopupService} from "../../services/popup.service";
import {LanguageHandler} from "../../handler/LanguageHandler";

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
  bikeStatus: string = 'Status: {0}'
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
  visibleBookButton: boolean = true;
  @Input()
  visibleAdminButtons: boolean = true;

  unassignedBikeText = "Unassigned";
  bikeId = -1;
  deleteBikePopupDescription = "Do you really want to delete the bike?";

  @Input()
  bikeData: any | undefined;

  @Output() onBikeDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor(private bikeService: BikeService, private popupService: PopupService) {
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
      this.bikeStatus = LanguageHandler.formatString("Status: {0}", [this.bikeData.status]); // TODO format color
      this.bikePrice = LanguageHandler.formatString("Price: {0}$", [this.bikeData.price])

      if (this.bikeData.assigned_to) {
        // TODO
      } else {
        this.bikeAssignedStation = LanguageHandler.formatString("Assigned Bike Station: {0}", [this.unassignedBikeText])
      }

      this.bikeService.getBikeTypes(this.bikeId).subscribe({
        next: (res) => {
          this.bikeModel = LanguageHandler.formatString("Model: {0}", [res[0].model_name]);
          this.bikeCategory = LanguageHandler.formatString("Category: {0}", [res[0].category_name]);
          console.log(res);
        },
        error: (err) => {
          console.log("Error fetching bike types: ", err);
          this.bikeModel = LanguageHandler.formatString("Model: {0}", ["-"]);
          this.bikeCategory = LanguageHandler.formatString("Category: {0}", ["-"]);
        }
      })

    }
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
