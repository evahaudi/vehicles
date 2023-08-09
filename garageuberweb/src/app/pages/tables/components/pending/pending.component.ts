import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DeliveryStatusService } from '../../services/delivery-status.service';

export interface DeliveryStatus {
  id: number;
  productId: number;
  customerName: string;
  customerPhone: string;
  productName: string;
  productCategory: string;
  productDeliveryLocation: string;
  deliveryStatusCode: string;
  supplierId: number;
  supplierName: string;
  supplierEmail: string;
  supplierLocation: string;
  supplierPhone: string;
  routeId: number;
  status : string;
}


@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  public deliveryStatus: DeliveryStatus[];

  constructor(private deliveryStatusService: DeliveryStatusService) { }

  ngOnInit(): void {
    this.getDeliveryStatuses();
  }

   //delivery status
   public getDeliveryStatuses(): void {
    this.deliveryStatusService.getDeliveryStatuses().subscribe(
      (response: DeliveryStatus[]) => {
        this.deliveryStatus = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteDeliveryStatus(deliveryStatusId: number, delivery: DeliveryStatus): void {
    var c = confirm("Are you sure you want want to delete delivery for " + delivery.productName +" ? The delivery status is "+ delivery.status);
    var status = document.getElementById("content");
    if (c == true) {
     this.deliveryStatusService.deleteDeliveryStatus(deliveryStatusId).subscribe(
       (response: void) => {
         console.log(response);
         this.getDeliveryStatuses();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );
    alert( "You confirmed, thanks");
    } else {
      this.getDeliveryStatuses();
     alert( "You cancelled the action");
    }
  }


}
