import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiServerUrl}/supplier/all`);
  }

  public addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(`${this.apiServerUrl}/supplier/add`, supplier);
  }

  public updateSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(`${this.apiServerUrl}/supplier/update`, supplier);
  }

  public deleteSupplier(supplierId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${supplierId}`);
  }
}
