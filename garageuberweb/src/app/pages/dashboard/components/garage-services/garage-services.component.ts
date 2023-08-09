import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { routes } from 'src/app/consts/routes';
import { ServiceRequest } from 'src/app/models/service_requests';
import { User } from 'src/app/pages/auth/models';
import { RegisterGarageService } from 'src/app/pages/tables/services/register-garage.service';
import { ServiceRequestsService } from 'src/app/pages/tables/services/service-requests.service';

@Component({
  selector: 'app-garage-services',
  templateUrl: './garage-services.component.html',
  styleUrls: ['./garage-services.component.scss']
})
export class GarageServicesComponent implements OnInit {
  @Input() user: User;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;

  mechanic: string = '';

  public serviceRequests: ServiceRequest[];
  public editserviceRequests: ServiceRequest;
  public deleteserviceRequests: ServiceRequest;


  public signOutEmit(): void {
    this.signOut.emit();
  }

  constructor(private serviceRequestService: ServiceRequestsService,private registerGarageService: RegisterGarageService) { }

  ngOnInit(): void {
    this.getServiceRequests();
    this.mechanic = this.getLoggedInUsername();
  }

  public getServiceRequests(): void {
    this.serviceRequestService.getServiceRequests().subscribe(
      (response: ServiceRequest[]) => {
        this.serviceRequests = response;
        const total = this.serviceRequests.length;
        alert("You have " + total + " garage service requests")
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  //on delete request
  public onDeleteRequest(requestId: number, request: ServiceRequest): void {
    var c = confirm("Are you sure you want want to delete service request from " + request.requestedUserName +" ?" + "This action cannot be undone.");
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
        this.getServiceRequests();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  //delete request
  public onDeleteServiceRequest(requestId: number): void {
    this.serviceRequestService.deleteServiceRequests(requestId).subscribe(
      (response: void) => {
        console.log(response);
        this.getServiceRequests();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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

  //open modal
  public onOpenModal(request: ServiceRequest, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addRequestModal');
    }
    if (mode === 'edit') {
      this.editserviceRequests = request;
      button.setAttribute('data-target', '#updateRequestModal');
    }
    if (mode === 'delete') {
      this.deleteserviceRequests = request;
      button.setAttribute('data-target', '#deleteRequestModal');
    }
    container.appendChild(button);
    button.click();
  }

  //loggedin user
  public getLoggedInUsername(): string {
    return localStorage.getItem('loggedin_username');
  }

}
