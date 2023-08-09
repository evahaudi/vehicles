import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DeliveryStatusService } from 'src/app/pages/tables/services/delivery-status.service';

import { SupportRequestData } from '../../models/support-request-data';

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
  selector: 'app-support-requests',
  templateUrl: './support-requests.component.html',
  styleUrls: ['./support-requests.component.scss']
})
export class SupportRequestsComponent implements OnInit {
  public ngOnInit() {
  }

  public deliveryStatus: DeliveryStatus[];

  constructor(private deliveryStatusService: DeliveryStatusService){}

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


  @Input() supportRequestData: SupportRequestData[];
  public displayedColumns: string[] = ['name', 'email', 'product', 'price', 'date', 'city', 'status'];
}
