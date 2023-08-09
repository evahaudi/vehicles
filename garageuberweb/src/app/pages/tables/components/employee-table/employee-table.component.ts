import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

import { Employee } from '../../models/employee';
import { SupplierService } from 'src/app/pages/typography/service/supplier.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { ProductService } from '../../services/product.service';
import { NgForm } from '@angular/forms';
import { routes } from 'src/app/consts';
import { RegisterGarage } from 'src/app/models/register_garage';
import { RegisterGarageService } from '../../services/register-garage.service';

export interface Supplier {
  id: number;
  name: string;
  email: string;
  location: string;
  phone: string;
  imageUrl: string;
  supplierCode: string;
}

export interface Product {
  id: number;
  customerName: string;
  customerPhone: string;
  productName: string;
  productCategory: string;
  productDeliveryLocation: string;
  productCode: string;
}

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  @Input() employeeTableData: Employee[];
  public displayedColumns: string[] = ['select', 'name', 'supplier_email', 'supplier_phone', 'location'];
  public dataSource: MatTableDataSource<Employee>;
  public selection = new SelectionModel<Employee>(true, []);

  public suppliers: Supplier[];
  public displaySupplierColumns: string[] = ['name', 'supplier_email', 'supplier_phone', 'location'];
  supplierdatasource;
  supplier;
  public editSuppliers: Supplier;
  public deleteSuppliers: Supplier;

  public products: Product[];
  public editProduct: Product;
  public deleteProduct: Product;

  public garages: RegisterGarage[];
  public editGarage: RegisterGarage;
  public deleteGarage: RegisterGarage;


  public routes: typeof routes = routes;


  public isShowFilterInput = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private supplierService: SupplierService, private productService: ProductService, private registerGarageService: RegisterGarageService) { }

  public ngOnInit(): void {
    this.getGarages();

    this.dataSource = new MatTableDataSource<Employee>(this.employeeTableData);

    this.dataSource.paginator = this.paginator;
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(this.products);
      },
      (error: HttpErrorResponse) => {
      }
    );
  }

  public getGarages(): void {
    this.registerGarageService.getgarages().subscribe(
      (response: RegisterGarage[]) => {
        this.garages = response;
        console.log(this.garages);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddGarage(addForm: NgForm): void {
    document.getElementById('add-garage-form').click();
    this.registerGarageService.addGarage(addForm.value).subscribe(
      (response: RegisterGarage) => {
        console.log(response);
        this.getGarages();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public onUpdateGarage(garage: RegisterGarage): void {
    this.registerGarageService.updateGarage(garage).subscribe(
      (response: RegisterGarage) => {
        console.log(response);
        this.getGarages();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onDeleteGarage(garageId: number): void {
    this.registerGarageService.deleteGarage(garageId).subscribe(
      (response: void) => {
        console.log(response);
        this.getGarages();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public searchGarage(key: string): void {
    console.log(key);
    const results: RegisterGarage[] = [];
    for (const garage of this.garages) {
      if (garage.garageName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.garageLocation.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.garageOwnerName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.service1.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.service2.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.service3.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.service4.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.service5.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.garagePhone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.garageEmail.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(garage);
      }
    }
    this.garages = results;
    if (results.length === 0 || !key) {
      this.getGarages();
    }
  }


  public searchGarages(key: string): void {
    console.log(key);
    const results: RegisterGarage[] = [];
    for (const garage of this.garages) {
      if (garage.garageName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.garageLocation.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.garageEmail.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.service1.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.service2.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.garageOwnerName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || garage.garagePhone.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(garage);
      }
    }
    this.garages = results;
    if (results.length === 0 || !key) {
      this.getGarages();
    }
  }

  public onOpenModal(garage: RegisterGarage, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addGarageModal');
    }
    if (mode === 'edit') {
      this.editGarage = garage;
      button.setAttribute('data-target', '#updateGarageModal');
    }
    if (mode === 'delete') {
      this.deleteGarage = garage;
      button.setAttribute('data-target', '#deleteGarageModal');
    }
    container.appendChild(button);
    button.click();
  }
  // end products

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
public getSuppliersList(){
  this.supplierService.getSuppliers().subscribe(
    (suppliers: Supplier[]) => {
      this.suppliers = suppliers;
      this.supplierdatasource = new MatTableDataSource(suppliers);
      this.supplierdatasource.sort = this.sort;
    }
  );
}
  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  public checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public showFilterInput(): void {
    this.isShowFilterInput = !this.isShowFilterInput;
    this.dataSource = new MatTableDataSource<Employee>(this.employeeTableData);
  }
}
