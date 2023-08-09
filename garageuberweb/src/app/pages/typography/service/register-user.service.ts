import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/app/models/register_user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<RegisterUser[]> {
    return this.http.get<RegisterUser[]>(`${this.apiServerUrl}/register_user/all`);
  }

  public addUser(user: RegisterUser): Observable<RegisterUser> {
    return this.http.post<RegisterUser>(`${this.apiServerUrl}/register_user/add`, user);
  }

  public updateUser(user: RegisterUser): Observable<RegisterUser> {
    return this.http.put<RegisterUser>(`${this.apiServerUrl}/register_user/update`, user);
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/register_user/delete/${userId}`);
  }
}
