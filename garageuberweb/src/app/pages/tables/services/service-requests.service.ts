import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceRequest } from 'src/app/models/service_requests';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getServiceRequests(): Observable<ServiceRequest[]> {
    return this.http.get<ServiceRequest[]>(`${this.apiServerUrl}/service_requests/all`);
  }

  public addServiceRequests(garage: ServiceRequest): Observable<ServiceRequest> {
    return this.http.post<ServiceRequest>(`${this.apiServerUrl}/service_requests/add`, garage);
  }

  public updateServiceRequests(garage: ServiceRequest): Observable<ServiceRequest> {
    return this.http.put<ServiceRequest>(`${this.apiServerUrl}/service_requests/update`, garage);
  }

  public deleteServiceRequests(garageId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/service_requests/delete/${garageId}`);
  }
}
