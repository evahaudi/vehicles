import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reviews } from 'src/app/models/reviews';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllReviews(): Observable<Reviews[]> {
    return this.http.get<Reviews[]>(`${this.apiServerUrl}/reviews/all`);
  }

  public addReview(review: Reviews): Observable<Reviews> {
    return this.http.post<Reviews>(`${this.apiServerUrl}/reviews/add`, review);
  }

  public updateReview(review: Reviews): Observable<Reviews> {
    return this.http.put<Reviews>(`${this.apiServerUrl}/reviews/update`, review);
  }

  public deleteReview(reviewId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/reviews/delete/${reviewId}`);
  }
}
