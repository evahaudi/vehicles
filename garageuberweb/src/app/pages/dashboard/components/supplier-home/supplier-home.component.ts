import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RegisterGarage } from 'src/app/models/register_garage';
import { RegisterUser } from 'src/app/models/register_user';
import { LoginSupplierComponent } from 'src/app/pages/auth/components/login-supplier/login-supplier.component';
import { Supplier } from 'src/app/pages/notification/containers';
import { Delivery, DeliveryStatus, Product } from 'src/app/pages/tables/components';
import { DeliveriesService } from 'src/app/pages/tables/services/deliveries.service';
import { DeliveryStatusService } from 'src/app/pages/tables/services/delivery-status.service';
import { ProductService } from 'src/app/pages/tables/services/product.service';
import { RegisterGarageService } from 'src/app/pages/tables/services/register-garage.service';
import { SupplierService } from 'src/app/pages/typography/service/supplier.service';
import { routes } from '../../../../consts';
import { User } from '../../../../pages/auth/models';

@Component({
  selector: 'app-supplier-home',
  templateUrl: './supplier-home.component.html',
  styleUrls: ['./supplier-home.component.scss']
})
export class SupplierHomeComponent implements OnInit {
  public somesup: LoginSupplierComponent;

 supplier: string = '';

 public suppliers: Supplier[];
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

  public garages: RegisterGarage[];


  public products: Product[];

  constructor(
    private deliveryService: DeliveriesService,
    private supplierService: SupplierService,
    private registerGarageService: RegisterGarageService,
    private productService: ProductService,
    private deliveryStatusService: DeliveryStatusService) { }

  ngOnInit(): void {
    this.getSuppliers();
    this.getDeliveries();
    this.getDeliveryStatuses();
    this.getProducts();
    this.getGarages();
    this.supplier = this.getLoggedInUsername();
  }


  //products
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

  public getGarages(): void {
    this.registerGarageService.getgarages().subscribe(
      (response: RegisterGarage[]) => {
        this.garages = response;
        console.log(this.garages);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  //suppliers
  public getSuppliers(): void {
    this.supplierService.getSuppliers().subscribe(
      (response: Supplier[]) => {
        this.suppliers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

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

            this.getSuppliers();
            this.getDeliveries();
            this.getDeliveryStatuses();
            this.getProducts();
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



  public getLoggedInUsername(): string {
    return localStorage.getItem('loggedin_username');
  }

  //logout
  @Input() user: User;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;
  public flatlogicEmail: string = "eyezosupplies@gmail.com";

  public signOutEmit(): void {
    this.signOut.emit();
  }


}
