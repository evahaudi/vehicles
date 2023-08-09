import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { routes } from 'src/app/consts/routes';
import { Reviews } from 'src/app/models/reviews';
import { ServiceRequest } from 'src/app/models/service_requests';
import { ReviewsService } from 'src/app/pages/tables/services/reviews.service';
import { ServiceRequestsService } from 'src/app/pages/tables/services/service-requests.service';

@Component({
  selector: 'app-user-review-page',
  templateUrl: './user-review-page.component.html',
  styleUrls: ['./user-review-page.component.scss']
})
export class UserReviewPageComponent implements OnInit {
  public routes: typeof routes = routes;

  user: string = '';

  public serviceRequests: ServiceRequest[];

  public reviews: Reviews[];

  public confirmGarage: ServiceRequest;
  public confirmMechanic: ServiceRequest;
  public confirmPayment: ServiceRequest;


  constructor(private serviceRequestService: ServiceRequestsService, private reviewsService: ReviewsService) { }

  ngOnInit(): void {
    this.getServiceRequests();
    this.getAllReviews();
    this.user = this.getLoggedInUsername();
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

  //get reviews
  public getAllReviews(): void {
    this.reviewsService.getAllReviews().subscribe(
      (response: Reviews[]) => {
        this.reviews = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  //add review
  public onAddReview(addForm: NgForm): void {
    document.getElementById('add-user-form').click();
    this.reviewsService.addReview(addForm.value).subscribe(
      (response: Reviews) => {
        console.log(response);
        alert("Review added successfully!");
        this.getAllReviews();
        this.getServiceRequests();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
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
    if (mode === 'completed') {
      this.confirmPayment = request;
      button.setAttribute('data-target', '#writeReviewModal');
    }
    container.appendChild(button);
    button.click();
  }

  //loggedin user
  public getLoggedInUsername(): string {
    return localStorage.getItem('loggedin_username');
  }

}
