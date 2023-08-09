import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { routes } from 'src/app/consts';
import { Reviews } from 'src/app/models/reviews';
import { User } from 'src/app/pages/auth/models';
import { ReviewsService } from 'src/app/pages/tables/services/reviews.service';

@Component({
  selector: 'app-garage-review-page',
  templateUrl: './garage-review-page.component.html',
  styleUrls: ['./garage-review-page.component.scss']
})
export class GarageReviewPageComponent implements OnInit {
  @Input() user: User;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;

  public reviews: Reviews[];


  constructor(private reviewsService: ReviewsService) { }

  ngOnInit(): void {
    this.getAllReviews();
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
}
