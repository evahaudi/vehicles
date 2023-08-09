import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { SuccessToastComponent } from '../success-toast/success-toast.component';
import { ErrorToastrComponent } from '../error-toastr/error-toastr.component';
import { InfoToastrComponent } from '../info-toastr/info-toastr.component';
import { SupplierService } from 'src/app/pages/typography/service/supplier.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/pages/tables/services/product.service';
import { DeliveriesService } from 'src/app/pages/tables/services/deliveries.service';
import { count } from 'console';

enum ToastPositionTypes {
  bottomCenter = 'toast-bottom-center',
  bottomRight = 'toast-bottom-right',
  bottomLeft = 'toast-bottom-left',
  topCenter = 'toast-top-center',
  topRight = 'toast-top-right',
  topLeft = 'toast-top-left'
}

export interface Supplier {
  id: number;
  name: string;
  email: string;
  location: string;
  phone: string;
  imageUrl: string;
  supplierCode: string;
}

export interface Product {
  id: number;
  productId: number;
  customerName: string;
  customerPhone: string;
  productName: string;
  productCategory: string;
  productDeliveryLocation: string;
  productCode: string;
}

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

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss']
})
export class NotificationPageComponent implements OnInit {
  public toastrPositionTypes: typeof ToastPositionTypes = ToastPositionTypes;
  public toastrPosition: string = this.toastrPositionTypes.topRight;
  public timeOut = 3000;
  public toastrLink: string = 'https://github.com/scttcper/ngx-toastr';

  public suppliers: Supplier[];
  public editSupplier: Supplier;
  public deleteSupplier: Supplier;
  public selectedSupplierName;
  public selectedSupplierEmail;
  public selectedSupplierPhone;
  public selectedSupplierID;
  public selectedSupplierLocation;

  public products: Product[];
  public editProduct: Product;
  public deleteProduct: Product;
  public selectedProductId;
  public selectedCustomerName;
  public selectedCustomerPhone;
  public selectedProductName;
  public selectedProductCategory;
  public selectedProductDeliveryLocation;
  public selectedProductCode;


  public deliveries: Delivery[];
  public deleteDeliveries: Delivery;
  public editDelivery: Delivery;
  public len;

  constructor(
    private toastrService: ToastrService,
    private supplierService: SupplierService,
    private productService: ProductService,
    private deliveryService: DeliveriesService) {
  }
  ngOnInit(): void {
    this.getSuppliers();
    this.getDeliveries();
    this.getProducts();
  }

  public prodItemsIds = new Array();
  //start deliveries
  public getDeliveries(): void {
    this.deliveryService.getDeliveries().subscribe(
      (response: Delivery[]) => {
        this.deliveries = response;

        for (var i = 0; i < this.deliveries.length; i++){
          this.prodItemsIds.push(this.deliveries[i].productId);
      }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.showErrorToastr();
      }
    );
  }

  public onDeleteDelivery(deliveryId: number, delivery: Delivery): void {
    var c = confirm("Are you sure you want want to delete delivery for " + delivery.productName +" ?");
    var status = document.getElementById("content");
    if (c == true) {
     this.deliveryService.deleteDelivery(deliveryId).subscribe(
       (response: void) => {
         console.log(response);
         this.getDeliveries();
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


  public capturedInfo: any;
  public onDeliverConfirmation(): void{
    this.capturedInfo = {
      "productId": this.selectedProductId,
      "customerName": this.selectedCustomerName,
      "customerPhone": this.selectedCustomerPhone,
      "productName": this.selectedProductName,
      "productCategory": this.selectedProductCategory,
      "productDeliveryLocation": this.selectedProductDeliveryLocation,
      "supplierId": this.selectedSupplierID,
      "supplierName": this.selectedSupplierName,
      "supplierEmail": this.selectedSupplierEmail,
      "supplierLocation": this.selectedSupplierLocation,
      "supplierPhone": this.selectedSupplierPhone
    }
    if((this.selectedProductId != null) && (this.selectedCustomerName != null) &&(this.selectedCustomerPhone != null)&&(this.selectedProductName != null)
    &&(this.selectedProductCategory != null)&&(this.selectedProductDeliveryLocation != null)&&(this.selectedSupplierID != null)&&
    (this.selectedSupplierName != null)&&(this.selectedSupplierEmail != null)&&(this.selectedSupplierLocation != null)&&
    (this.selectedSupplierPhone != null)){
      this.deliveryService.addDelivery(this.capturedInfo).subscribe(
        (response:Delivery) => {
          console.log(response);
          this.getDeliveries();
          this.showSuccess();
        },
        (error:HttpErrorResponse) => {
          alert(error.message);
          this.showErrorToastr();
        }
      );
    }else{
      alert("Make sure none of the entries are null")
      this.showErrorToastr();
    }
  }

  public onOpenDeliveryModal(delivery: Delivery, mode: string): void {
    const container = document.getElementById('deliveries-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addDeliveryModal');
    }
    if (mode === 'edit') {
      this.editDelivery = delivery;
      button.setAttribute('data-target', '#updateDeliveryModal');
    }
    if (mode === 'delete') {
      console.log("DELETE       "+ this.deleteDeliveries.id)

      this.deleteDeliveries = delivery;
      button.setAttribute('data-target', '#deleteDeliveryModal');
    }
    container.appendChild(button);
    button.click();
  }
  //end deliveries
public prodListIds= new Array();
  // start products
  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        for (var i = 0; i < this.products.length; i++){
          this.prodListIds.push(this.products[i].id);
      }
     this. understoodAssignment();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.showErrorToastr();
      }
    );
  }

  understoodAssignment(){
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        for (var i = 0; i < this.products.length; i++){
          this.prodListIds.push(this.products[i].id);
      }
      this.len = this.products.length;

      this.deliveryService.getDeliveries().subscribe(
        (response: Delivery[]) => {
          this.deliveries = response;
          for (var i = 0; i < this.deliveries.length; i++){
            this.prodItemsIds.push(this.deliveries[i].id);
          }
        });
       for (var i = 0; i < this.deliveries.length; i++){
         console.log("count "+ i)
        for (var j = 0; j < this.products.length; j++){
          if(this.products[j].id == this.deliveries[i].productId){

        console.log("product id is "+ this.products[j].id + " the item id is "+ this.deliveries[i].productId)

      }
      }
     }
     if(i > 0){
     alert("Congratulations mate, "+ i+" ongoing deliveries!!!!")
    }
      }
      ,
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.showErrorToastr();
      }
    );

  }

  public getId(prodId:number){
    console.log("000000000000000000000000000000000000000000000000000000000")
  }

  public onSelectProduct(customerName: string,customerPhone: string, productName: string,productCategory: string,
    productDeliveryLocation: string, productID: number){
    {
      this.deliveryService.getDeliveries().subscribe(
        (response: Delivery[]) => {
          this.deliveries = response;

          for (var i = 0; i < this.deliveries.length; i++){
            this.prodItemsIds.push(this.deliveries[i].id);
          }
        });
       for (var i = 0; i < this.deliveries.length; i++){
         if(this.prodItemsIds[i] == productID){
          alert("This product has already been assigned for delivery");

          const button = document.getElementById('unselected');
          button.style.display = 'none';

          this.selectedCustomerName = null;
          this.selectedCustomerPhone = null;
          this.selectedProductName = null;
          this.selectedProductCategory = null;
          this.selectedProductDeliveryLocation = null;
          this.selectedProductId = null;

         this.showErrorToastr();
         }
         else{
          this.selectedCustomerName = customerName;
          this.selectedCustomerPhone = customerPhone;
          this.selectedProductName = productName;
          this.selectedProductCategory = productCategory;
          this.selectedProductDeliveryLocation = productDeliveryLocation;
          this.selectedProductId = productID;

          alert("Assigned : " + productName + " delivery to " + this.selectedSupplierName);

        //  const button = document.getElementById('unselected');
        //   button.setAttribute('id','selected');
        //   button.style.display = 'none';

          this.showInfoToastr();
         }
       }
    }



  }

  // getting id of the product from products list
  public productListId;


  // getting Id of the product from deliveries list
  public productDeliveredId;
  public getItemId(productId: number){
    this.productDeliveredId = productId;
    console.log(this.productDeliveredId);
  }

  //comapring names so as to hide some buttons
  public hideSomeButtons(){
    if(this.productDeliveredId == this.productListId){
      const button = document.getElementById('unselected');
       button.setAttribute('id','selected');
       button.style.display = 'none';
    }
  }


  public searchProducts(key: string): void {
    console.log(key);
    const results: Product[] = [];
    for (const product of this.products) {
      if (product.customerName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || product.productName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || product.productCategory.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || product.productDeliveryLocation.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(product);
      }
    }
    this.products = results;
    if (results.length === 0 || !key) {
      this.getProducts();
    }
  }
  // end products


  // supplier begin
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

  public onSelectSupplier(supplierName: string, supplierEmail: string,supplierLocation: string, supplierPhone: string, supplierID: number){
    this.selectedSupplierName = supplierName;
    this.selectedSupplierEmail = supplierEmail;
    this.selectedSupplierID = supplierID;
    this.selectedSupplierPhone = supplierPhone;
    this.selectedSupplierLocation = supplierLocation;

    const button = document.getElementById('unchosen');
    button.setAttribute('id','chosen');
    button.style.display = 'none';

    alert("Selected: " + supplierName)
    this.showInfoToastr();
   console.log(" Name " + supplierName + " location " + supplierLocation + " Phone " + supplierPhone + " ID " + supplierID);
  }

  public searchSuppliers(key: string): void {
    console.log(key);
    const results: Supplier[] = [];
    for (const supplier of this.suppliers) {
      if (supplier.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || supplier.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || supplier.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || supplier.location.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(supplier);
      }
    }
    this.suppliers = results;
    if (results.length === 0 || !key) {
      this.getSuppliers();
    }
  }

  public onOpenModal(supplier: Supplier, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSupplierModal');
    }
    if (mode === 'edit') {
      this.editSupplier = supplier;
      button.setAttribute('data-target', '#updateSupplierModal');
    }
    if (mode === 'delete') {
      this.deleteSupplier = supplier;
      button.setAttribute('data-target', '#deleteSupplierModal');
    }
    container.appendChild(button);
    button.click();
  }
  // supplier end

  public setToastrPosition(position: string): void {
    this.toastrPosition = position;
  }

  public showSuccess(): void {
    this.toastrService.show(
      null,
      null,
      {
        positionClass: this.toastrPosition,
        toastComponent: SuccessToastComponent,
        timeOut: this.timeOut,
        tapToDismiss: false
      }
    );
  }

  public showErrorToastr(): void {
    this.toastrService.show(
      null,
      null,
      {
        positionClass: this.toastrPosition,
        toastComponent: ErrorToastrComponent,
        timeOut: this.timeOut,
        tapToDismiss: false
      }
    );
  }

  public showInfoToastr(): void {
    this.toastrService.show(
      null,
      null,
      {
        positionClass: this.toastrPosition,
        toastComponent: InfoToastrComponent,
        timeOut: this.timeOut,
        tapToDismiss: false
      }
    );
  }
}
