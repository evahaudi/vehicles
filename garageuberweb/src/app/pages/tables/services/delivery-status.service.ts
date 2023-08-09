import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DeliveryStatus } from '../components';

@Injectable({
  providedIn: 'root'
})
export class DeliveryStatusService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDeliveryStatuses(): Observable<DeliveryStatus[]> {
    return this.http.get<DeliveryStatus[]>(`${this.apiServerUrl}/deliveryStatus/all`);
  }

  public addDelivery(deliveryStatus: DeliveryStatus): Observable<DeliveryStatus> {
    return this.http.post<DeliveryStatus>(`${this.apiServerUrl}/deliveryStatus/add`, deliveryStatus);
  }

  public updateDelivery(deliveryStatus: DeliveryStatus): Observable<DeliveryStatus> {
    return this.http.put<DeliveryStatus>(`${this.apiServerUrl}/deliveryStatus/update`, deliveryStatus);
  }

  public deleteDeliveryStatus(deliveryStatusId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deliveryStatus/delete/${deliveryStatusId}`);
  }

}
