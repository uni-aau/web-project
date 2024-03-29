import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {LanguageHandler} from "../../handler/LanguageHandler";
import {PopupService} from "../../services/popup.service";
import {ModelService} from "../../services/model.service";
import {TicketService} from "../../services/ticket.service";
import {TicketUtilityService} from "../../services/ticket.utility.service";
import {WalletService} from "../../services/wallet.service";

@Component({
  selector: 'model-component',
  templateUrl: 'model-component.component.html',
  styleUrls: ['model-component.component.css'],
})
export class ModelComponent implements OnInit {
  @Input()
  modelHintSubtitle: string =
    'Receive a randomly selected bike of the booked model'
  @Input()
  modelPrice: string = 'Price: {0}'
  @Input()
  modelName: string = '{0}'
  @Input()
  rootClassName: string = ''
  @Input()
  modelAssignedToCategory: string = 'Assigned to Category: {0}'
  modelAssignedToCategoryOld: string = 'Assigned to Category: {0}'
  @Input()
  modelAssignedBikes: string = 'Assigned Bikes: {0}'
  modelAssignedBikesOld: string = 'Assigned Bikes: {0}'
  @Input()
  modelData: any | undefined;

  @Input()
  showAdminButtons: boolean = true;
  @Input()
  visibleBookButton: boolean = false;

  modelId = -1;
  deleteModelPopupDescription = 'Do you really want to delete the bike?';

  @Output() onModelDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onModelUpdate: EventEmitter<any> = new EventEmitter<any>();

  constructor(private modelService: ModelService, private popupService: PopupService,
              private ticketService: TicketService, private ticketUtilyService: TicketUtilityService, private walletService: WalletService) {
  }

  ngOnInit() {
    this.insertData();
  }

  insertData() {
    if (this.modelData) {
      console.log(this.modelData)
      this.modelId = this.modelData.model_id;
      this.modelName = this.modelData.model_name;
      this.modelPrice = LanguageHandler.formatString("Price: {0}$", [this.modelData.price])
      this.modelAssignedToCategory = LanguageHandler.formatString(this.modelAssignedToCategoryOld, [this.modelData.category_name])
      this.modelAssignedBikes = LanguageHandler.formatString(this.modelAssignedBikesOld, [this.modelData.bike_count])
    }
  }

  handleButtonClicked(event: any) {
    if (event === 'delete') this.deleteModel();
    else if (event === 'update') this.updateModel();
  }

  deleteModel() {
    if (this.modelData.bike_count == 0) {
      this.popupService.openPopup(this.deleteModelPopupDescription)
        .subscribe(result => {
          if (result) this.executeDeletionQuery();
        })
    } else alert("There are currently bikes assigned") // TODO reset with actual snackbar
  }

  executeDeletionQuery() {
    this.modelService.deleteModel(this.modelId).subscribe({
      next: (res) => {
        if (res.success) {
          this.onModelDelete.emit(this.modelId);
        } else {
          console.log("Error, deletion was not successful: ", res);
        }
      },
      error: (err) => console.log(`Error while deleting model ${this.modelId}:`, err)
    })
  }

  updateModel() {
    this.popupService.openUpdateModelPopup(this.modelData.model_name, this.modelData.price).subscribe({
      next: (val) => {
        if (val) this.executeUpdateQuery(val);
      },
      error: (err) => console.log(err)
    })
  }

  executeUpdateQuery(val: any) {
    this.modelService.updateModel(this.modelId, val.modelName, val.modelPrice, val.categoryId).subscribe({
      next: (val) => {
        if (val.success) {
          console.log(val);
          this.onModelUpdate.emit(this.modelId);
        }
      },
      error: (err) => console.log(err)
    })
  }

  performBook($event: MouseEvent) {
    console.log(this.modelData)
    const dialogRef = this.popupService.openBookTicketPopup(this.modelData.category_name, this.modelData.model_name, this.modelData.price)


    dialogRef.subscribe(result => {
      if (result) {
        const {price, status, bookingDate, rentingStart, endDate} = result;

        this.ticketService.newTicket(
          price,
          "Model",
          undefined,
          this.modelData.category_id,
          this.modelData.model_id,
          status,
          bookingDate,
          rentingStart,
          endDate,
          price
        ).subscribe({
          next: (response) => {
            this.walletService.withDrawMoneyUser(result.price).subscribe({
              next: (response) => console.log('Booking Successful', response),
              error: (error) => console.log("Error while withdrawing money:", error)
            })
          },
          error: (error) => {
            console.error('Error while booking', error);
          }
        });
      }
    });
  }
}
