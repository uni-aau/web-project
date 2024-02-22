import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogPopupComponent} from "../components/dialog-popup-component/dialog-popup-component.component";
import {Observable} from "rxjs";
import {DepositMoneyPopup} from "../components/deposit-money-popup/deposit-money-popup.component";
import {
  AdminBikeAssignmentComponent
} from "../components/admin-bike-assignment-component/admin-bike-assignment-component.component";
import {
  AdminManageBikePopupComponent
} from "../components/admin-manage-bike-popup-component/admin-manage-bike-popup-component.component";
import {
  BookTicketPopupComponent
} from "../components/book-ticket-popup-component/book-ticket-popup-component.component";
import {
  AdminManageCategoryPopupComponent
} from "../components/admin-manage-category-popup-component/admin-manage-category-popup-component.component";
import {
  AdminManageModelPopupComponent
} from "../components/admin-manage-model-popup-component/admin-manage-model-popup-component.component";
import {NewReviewPopupComponent} from "../components/new-review-popup-component/new-review-popup-component.component";
import {
  BookingQRCodePopupComponent
} from "../components/booking-qr-code-popup-component/booking-qr-code-popup-component.component";
import {
  BookingRentBikeStartConfirmationPopupComponent
} from "../components/booking-rent-bike-start-confirmation-popup-component/booking-rent-bike-start-confirmation-popup-component.component";
import {
  ReturnBikePopupComponent
} from "../components/return-bike-popup-component/return-bike-popup-component.component";
@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog: MatDialog) {
  }

  openPopup(description: string): Observable<boolean> {
    const dialogRef = this.dialog.open(DialogPopupComponent, {data: {description: description}})

    return dialogRef.afterClosed();
  }

  openDepositMoneyPopup(): Observable<number> {
    const dialogRef = this.dialog.open(DepositMoneyPopup);

    return dialogRef.afterClosed();
  }

  openAssignBikePopup(modelName: string, categoryName: string, categoryId: string) {
    const dialogRef = this.dialog.open(AdminBikeAssignmentComponent, {
      data: {
        model: modelName,
        category: categoryName,
        categoryId: categoryId
      }
    })

    return dialogRef.afterClosed();
  }

  openCreateBikePopup() {
    const dialogRef = this.dialog.open(AdminManageBikePopupComponent)

    return dialogRef.afterClosed();
  }

  openUpdateBikePopup(bikeName: string, bikeSize: number, bikePrice: number, bikeStatus: string, imageLink: string) {
    const dialogRef = this.dialog.open(AdminManageBikePopupComponent, {
      data: {
        bikeName: bikeName,
        bikePrice: bikePrice,
        bikeSize: bikeSize,
        bikeStatus: bikeStatus,
        imageLink: imageLink
      }
    })

    return dialogRef.afterClosed();
  }

  openBookTicketPopup(category: string, bikeName: string | null, price: number) {
    const dialogRef = this.dialog.open(BookTicketPopupComponent, {
      data: {
        category: category,
        bikeName: bikeName,
        price: price
      }
    })

    return dialogRef.afterClosed();
  }

  openCreateCategoryPopup() {
    const dialogRef = this.dialog.open(AdminManageCategoryPopupComponent)

    return dialogRef.afterClosed();
  }

  openUpdateCategoryPopup(categoryName: string, categoryPrice: number) {
    const dialogRef = this.dialog.open(AdminManageCategoryPopupComponent, {
      data: {
        categoryName: categoryName,
        categoryPrice: categoryPrice
      }
    })

    return dialogRef.afterClosed();
  }

  openCreateModelPopup() {
    const dialogRef = this.dialog.open(AdminManageModelPopupComponent)

    return dialogRef.afterClosed();
  }

  openUpdateModelPopup(modelName: string, modelPrice: number) {
    const dialogRef = this.dialog.open(AdminManageModelPopupComponent, {
      data: {
        modelName: modelName,
        modelPrice: modelPrice
      }
    })

    return dialogRef.afterClosed();
  }

  openNewReviewPopup() {
    const dialogRef = this.dialog.open(NewReviewPopupComponent)

    return dialogRef.afterClosed();
  }

  openQrCodePopup() {
    const dialogRef = this.dialog.open(BookingQRCodePopupComponent)
  }

  openReturnBikePopup(ticketId: number, categoryId: number) {
    const dialogRef = this.dialog.open(ReturnBikePopupComponent, {
      data: {
        ticketId: ticketId,
        categoryId: categoryId
      }
    })
  }

  openRentTicketPopup(bikeName:string, parkingPlace: string, bookedType: string, rentingTime: Date, ticketId: number) {
    const dialogRef = this.dialog.open(BookingRentBikeStartConfirmationPopupComponent, {
      data: {
        bikeName: bikeName,
        parkingPlace: parkingPlace,
        bookedType: bookedType,
        rentingTime: rentingTime,
        ticketId: ticketId
      }
    })
    return dialogRef.afterClosed();
  }

}
