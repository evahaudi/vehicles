import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../models/supplier';
import { SuppliersService } from '../../services/suppliers.service';

@Component({
  selector: 'app-supplier-table',
  templateUrl: './supplier-table.component.html',
  styleUrls: ['./supplier-table.component.css']
})
export class SupplierTableComponent implements OnInit {
  public suppliers: Supplier[];
  public editSuppliers: Supplier;
  public deleteSuppliers: Supplier;
  private supplierService: SuppliersService


  constructor() { }

  ngOnInit(): void {
   // this.getSuppliers();
  }

  public getSuppliers(): void {
    this.supplierService.getSuppliers().subscribe(
      (response: Supplier[]) => {
        this.suppliers = response;
        console.log(this.suppliers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
