import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { Customer } from '../../models';
import { DeliveriesService } from '../../services/deliveries.service';
import { DeliveryStatusService } from '../../services/delivery-status.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../employee-table/employee-table.component';

export interface Delivery {
  id: number;
  productId: number;
  customerName: string;
  customerPhone: string;
  productName: string;
  productCategory: string;
  productDeliveryLocation: string;
  routeCode: string;
  supplierId: number;
  supplierName: string;
  supplierEmail: string;
  supplierLocation: string;
  supplierPhone: string;
}

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
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
  @Input() materialTableDate: Customer[];
  public displayedColumns: string[] = ['name', 'email', 'product', 'price', 'date', 'city', 'status'];
  public dataSource: Customer[];

  public deliveries: Delivery[];

  public deliveryStatus: DeliveryStatus[];
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

  public products: Product[];


  constructor(
    private deliveryService: DeliveriesService,
    private productService: ProductService,
    private deliveryStatusService: DeliveryStatusService){}

  public ngOnInit() {
    this.dataSource = this.materialTableDate;
    this.getDeliveries();
    this.getDeliveryStatuses();
    this.getProducts();
  }

  //products
  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(this.products);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(
      (response: void) => {
        console.log(response);
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



//deliveries
  public getDeliveries(): void {
    this.deliveryService.getDeliveries().subscribe(
      (response: Delivery[]) => {
        this.deliveries = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteDelivery(deliveryId: number): void {
     this.deliveryService.deleteDelivery(deliveryId).subscribe(
       (response: void) => {
         console.log(response);
         this.getDeliveries();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );

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

  public capturedInfo: any;
  public onSelectDelivery(routeId: number,productId: number,customerName: string,customerPhone: string,productName: string,productCategory: string,
    productDeliveryLocation: string,routeCode: string,supplierId: number,supplierName: string,supplierEmail: string,supplierLocation: string,
    supplierPhone: string){
      this.productId=productId;
      this.customerName = customerName;
      this.customerPhone =customerPhone;
      this.productName = productName;
      this.productCategory = productCategory;
      this.productDeliveryLocation = productDeliveryLocation;
      this.supplierId= supplierId;
      this.supplierName = supplierName;
      this.supplierEmail = supplierEmail;
      this.supplierLocation = supplierLocation;
      this.supplierPhone = supplierPhone;
      this.routeId = routeId;
      this.status = "delivered";

      this.capturedInfo = {
        "productId": this.productId,
        "customerName": this.customerName,
        "customerPhone": this.customerPhone,
        "productName": this.productName,
        "productCategory": this.productCategory,
        "productDeliveryLocation": this.productDeliveryLocation,
        "supplierId": this.supplierId,
        "supplierName": this.supplierName,
        "supplierEmail": this.supplierEmail,
        "supplierLocation": this.supplierLocation,
        "supplierPhone": this.supplierPhone,
        "routeId": this.routeId,
        "status": this.status
      }

      {
        this.deliveryStatusService.addDelivery(this.capturedInfo).subscribe(
          (response:DeliveryStatus) => {
            console.log(response);
            this.getDeliveryStatuses();
            alert("Delivery update is successfully set to " + this.status);

            this.onDeleteDelivery(this.routeId);
            this.onDeleteProduct(this.productId);
          },
          (error:HttpErrorResponse) => {
            alert(error.message);
            alert("Delivery update failed");
          }
        );
      }
  }

  public onSelectCancel(routeId: number,productId: number,customerName: string,customerPhone: string,productName: string,productCategory: string,
    productDeliveryLocation: string,routeCode: string,supplierId: number,supplierName: string,supplierEmail: string,supplierLocation: string,
    supplierPhone: string){
      this.productId=productId;
      this.customerName = customerName;
      this.customerPhone =customerPhone;
      this.productName = productName;
      this.productCategory = productCategory;
      this.productDeliveryLocation = productDeliveryLocation;
      this.supplierId= supplierId;
      this.supplierName = supplierName;
      this.supplierEmail = supplierEmail;
      this.supplierLocation = supplierLocation;
      this.supplierPhone = supplierPhone;
      this.routeId = routeId;
      this.status = "cancelled";

      this.capturedInfo = {
        "productId": this.productId,
        "customerName": this.customerName,
        "customerPhone": this.customerPhone,
        "productName": this.productName,
        "productCategory": this.productCategory,
        "productDeliveryLocation": this.productDeliveryLocation,
        "supplierId": this.supplierId,
        "supplierName": this.supplierName,
        "supplierEmail": this.supplierEmail,
        "supplierLocation": this.supplierLocation,
        "supplierPhone": this.supplierPhone,
        "routeId": this.routeId,
        "status": this.status
      }

      {
        this.deliveryStatusService.addDelivery(this.capturedInfo).subscribe(
          (response:DeliveryStatus) => {
            console.log(response);
            this.getDeliveryStatuses();
            alert("Delivery update is successfully set to " + this.status);
          },
          (error:HttpErrorResponse) => {
            alert(error.message);
            alert("Delivery update failed");
          }
        );
      }

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
      this.getDeliveries();
     alert( "You cancelled the action");
    }
  }

}


