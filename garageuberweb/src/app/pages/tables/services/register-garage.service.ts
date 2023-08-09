import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterGarage } from 'src/app/models/register_garage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterGarageService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getgarages(): Observable<RegisterGarage[]> {
    return this.http.get<RegisterGarage[]>(`${this.apiServerUrl}/register_garage/all`);
  }

  public addGarage(garage: RegisterGarage): Observable<RegisterGarage> {
    return this.http.post<RegisterGarage>(`${this.apiServerUrl}/register_garage/add`, garage);
  }

  public updateGarage(garage: RegisterGarage): Observable<RegisterGarage> {
    return this.http.put<RegisterGarage>(`${this.apiServerUrl}/register_garage/update`, garage);
  }

  public deleteGarage(garageId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/register_garage/delete/${garageId}`);
  }
}
