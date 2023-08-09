import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { routes } from 'src/app/consts/routes';
import { RegisterGarage } from 'src/app/models/register_garage';
import { RegisterUser } from 'src/app/models/register_user';
import { ServiceRequest } from 'src/app/models/service_requests';
import { ErrorToastrComponent, InfoToastrComponent, SuccessToastComponent } from 'src/app/pages/notification/containers';
import { RegisterGarageService } from 'src/app/pages/tables/services/register-garage.service';
import { ServiceRequestsService } from 'src/app/pages/tables/services/service-requests.service';
import { RegisterUserService } from 'src/app/pages/typography/service/register-user.service';

enum ToastPositionTypes {
  bottomCenter = 'toast-bottom-center',
  bottomRight = 'toast-bottom-right',
  bottomLeft = 'toast-bottom-left',
  topCenter = 'toast-top-center',
  topRight = 'toast-top-right',
  topLeft = 'toast-top-left'
}

@Component({
  selector: 'app-all-garages',
  templateUrl: './all-garages.component.html',
  styleUrls: ['./all-garages.component.scss']
})
export class AllGaragesComponent implements OnInit {
  public toastrPositionTypes: typeof ToastPositionTypes = ToastPositionTypes;
  public toastrPosition: string = this.toastrPositionTypes.topRight;
  public timeOut = 3000;
  public toastrLink: string = 'https://github.com/scttcper/ngx-toastr';
  user: string = '';

  public garages: RegisterGarage[];
  public editGarage: RegisterGarage;

  public confirmGarage: ServiceRequest;
  public confirmMechanic: ServiceRequest;
  public confirmPayment: ServiceRequest;

  public users: RegisterUser[];

  public serviceRequests: ServiceRequest[];
  public editserviceRequests: ServiceRequest;
  public deleteserviceRequests: ServiceRequest;



  public selectedUserName;
  public selectedUserPhone;
  public selectedUserLocation;
  public selectedUserImageURL;
  public selectedUserRequestedService;
  public selectedUserCode;
  public selectedGarageName;
  public selectedGarageLocation;
  public selectedGaragePhone;
  public selectedGarageEmail;
  public selectedGarageOwnerName;
  public selectedGarageLogoImageURL;
  public selectedGarageCode;
  public requestedServiceCharges;
  public waitingTime;
  public serviceStatus;


  public routes: typeof routes = routes;

  constructor(
    private registerGarageService: RegisterGarageService,
    private serviceRequestService: ServiceRequestsService,
    private registerUserService : RegisterUserService,
    private toastrService: ToastrService,) { }

  ngOnInit(): void {
    this.getGarages();
    this.getUsers();
    this.getServiceRequests();
    this.user = this.getLoggedInUsername();
  }

  //get garages
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

  //get users
  public getUsers(): void {
    this.registerUserService.getUsers().subscribe(
      (response: RegisterUser[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  //get requests
  public getServiceRequests(): void {
    this.serviceRequestService.getServiceRequests().subscribe(
      (response: ServiceRequest[]) => {
        this.serviceRequests = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchGarages(key: string): void {
    console.log(key);
    const results: RegisterGarage[] = [];
    for (const garage of this.garages) {
      if (garage.garageName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.garageLocation.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.garageEmail.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.service1.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.service2.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.garageOwnerName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.garagePhone.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(garage);
      }
    }
    this.garages = results;
    if (results.length === 0 || !key) {
      this.getGarages();
    }
  }

  //search requests
  public searchRequests(key: string): void {
    console.log(key);
    const results: ServiceRequest[] = [];
    for (const request of this.serviceRequests) {
      if (request.requestedUserLocation.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || request.requestedUserRequestedService.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || request.requestedGarageName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || request.requestedGarageLocation.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(request);
      }
    }
    this.serviceRequests = results;
    if (results.length === 0 || !key) {
      this.getServiceRequests();
    }
  }

  public onSelectGarage(userName: string, userPhone: string,userLocation: string, garauserImageURLgeEmail: string,userRequestedService: string,userCode: string,
    garageName: string, garageLocation: string,garagePhone: string, garageEmail: string, garageOwnerName: string,garageLogoImageURL: string,garageCode: string,
    requestedServiceCharges:number, waitingTime:number,serviceStatus:string){
    this.selectedUserName = userName;
    this.selectedUserPhone = userPhone;
    this. selectedUserLocation = userLocation;
    this. selectedUserImageURL = garauserImageURLgeEmail;
    this. selectedUserRequestedService = userRequestedService;
    this. selectedUserCode = userCode;
    this.selectedGarageName = garageName;
    this.selectedGarageLocation = garageLocation;
    this.selectedGaragePhone = garagePhone;
    this.selectedGarageEmail = garageEmail;
    this.selectedGarageOwnerName = garageOwnerName;
    this.selectedGarageLogoImageURL = garageLogoImageURL;
    this.selectedGarageCode = garageCode;
    this.requestedServiceCharges = requestedServiceCharges;
    this.waitingTime = waitingTime;
    this.serviceStatus = serviceStatus;



    const button = document.getElementById('unchosen');
    button.setAttribute('id','chosen');
    button.style.display = 'none';

    alert("Selected: " + garageName + " Garage Services")
    this.getGarages();
    this.showInfoToastr();

    this.onRequestConfirmation();
  }

  //save the captured details
  public capturedInfo: any;
  public onRequestConfirmation(): void{
    this.capturedInfo = {
      "requestedUserName": this.selectedUserName,
      "requestedUserPhone": this.selectedUserPhone,
      "requestedUserLocation": this.selectedUserLocation,
      "requestedUserImageURL": this.selectedUserImageURL,
      "requestedUserRequestedService": this.selectedUserRequestedService,
      "requestedUserCode": this.selectedUserCode,
      "requestedGarageName": this.selectedGarageName,
      "requestedGarageLocation": this.selectedGarageLocation,
      "requestedGaragePhone": this.selectedGaragePhone,
      "requestedGarageEmail": this.selectedGarageEmail,
      "requestedGarageOwnerName": this.selectedGarageOwnerName,
      "requestedGarageLogoImageURL": this.selectedGarageLogoImageURL,
      "requestedGarageCode": this.selectedGarageCode,
      "requestedServiceCharges": this.requestedServiceCharges,
      "waitingTime": this.waitingTime,
      "serviceStatus": this.serviceStatus
    }
    console.log(this.capturedInfo);
    if(!(Object.keys(this.capturedInfo).length === 0)){
      this.serviceRequestService.addServiceRequests(this.capturedInfo).subscribe(
        (response:ServiceRequest) => {
          //console.log(response);
          this.getServiceRequests();
          this.showSuccess();
          alert("Please wait for confirmation from the garage services")
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

  //on delete request
  public onDeleteRequest(requestId: number, request: ServiceRequest): void {
    var c = confirm("Are you sure you want want to cancel service request from " + request.requestedGarageName +" ?" + "This action cannot be undone.");
    var status = document.getElementById("content");
    if (c == true) {
     this.serviceRequestService.deleteServiceRequests(requestId).subscribe(
       (response: void) => {
         console.log(response);
         this.getServiceRequests();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );
    alert( "You confirmed, thanks");
    } else {
      this.getServiceRequests();
     alert( "You cancelled the action");
    }
  }


  //update request
  public onUpdateRequest(request: ServiceRequest): void {
    this.serviceRequestService.updateServiceRequests(request).subscribe(
      (response: ServiceRequest) => {
        console.log(response);
        alert("Successfully confirmed! Give it lets say " + this.confirmGarage.waitingTime + " minutes for your mechanic to arrive");
        this.getServiceRequests();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  //confirm mechanic
  public onConfirmMechanic(request: ServiceRequest): void {
    this.serviceRequestService.updateServiceRequests(request).subscribe(
      (response: ServiceRequest) => {
        console.log(response);
        alert("Thats great. Your charges will be Ksh." + this.confirmGarage.requestedServiceCharges + " ");
        this.getServiceRequests();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  //confirm payment
  public onConfirmPayment(request: ServiceRequest): void {
    this.serviceRequestService.updateServiceRequests(request).subscribe(
      (response: ServiceRequest) => {
        console.log(response);
        alert("Thanks you for choosing " + this.confirmGarage.requestedGarageName + " services. Please leave us a nice review. Safe Travels!!!!");
        this.getServiceRequests();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

    //Modal
    public onOpenModal(garage: RegisterGarage, mode: string): void {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        this.editGarage = garage;
        button.setAttribute('data-target', '#addServiceModal');
      }
      if (mode === 'edit') {
        this.editGarage = garage;
        button.setAttribute('data-target', '#updateGarageModal');
      }
      container.appendChild(button);
      button.click();
    }

    //Modal
    public onOpenConfirmModal(request: ServiceRequest, mode: string): void {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'confirm') {
        this.confirmGarage = request;
        button.setAttribute('data-target', '#confirmGarageServiceModal');
      }
      if (mode === 'arrived') {
        this.confirmMechanic = request;
        button.setAttribute('data-target', '#confirmMechanicArrivalModal');
      }
      if (mode === 'payed') {
        this.confirmPayment = request;
        button.setAttribute('data-target', '#confirmPaymentModal');
      }
      container.appendChild(button);
      button.click();
    }

    //loggedin user
    public getLoggedInUsername(): string {
      return localStorage.getItem('loggedin_username');
    }

    //info toaster
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

}
