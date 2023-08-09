import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Delivery } from '../../notification/containers/notification-page/notification-page.component';

@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDeliveries(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(`${this.apiServerUrl}/deliveries/all`);
  }

  public addDelivery(delivery: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>(`${this.apiServerUrl}/deliveries/add`, delivery);
  }

  public updateDelivery(delivery: Delivery): Observable<Delivery> {
    return this.http.put<Delivery>(`${this.apiServerUrl}/deliveries/update`, delivery);
  }

  public deleteDelivery(deliveryId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deliveries/delete/${deliveryId}`);
  }


}
