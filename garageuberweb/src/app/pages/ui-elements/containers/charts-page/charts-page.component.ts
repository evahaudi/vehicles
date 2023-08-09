import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ChartsService } from '../../services';
import {
  DashedLineChartData,
  HeatmapChartData,
  LineChartData,
  PieChartData
} from '../../models';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProductService } from 'src/app/pages/tables/services/product.service';
import { HttpErrorResponse } from '@angular/common/http';

interface ProductCategory {
  name: string;
  example: string;
}

interface DeliveryLocation {
  location: string;
  pin: string;
}

export interface Product {
  id: number;
  productId: number;
  customerName: string;
  customerPhone: string;
  productName: string;
  productCategory: string;
  productDeliveryLocation: string;
  productCode: string;
}

@Component({
  selector: 'app-charts-page',
  templateUrl: './charts-page.component.html',
  styleUrls: ['./charts-page.component.scss']
})
export class ChartsPageComponent  {
  selectedCategory: string;
  selectedLocation: string;

  public products: Product[];

  productCategory = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  categories: ProductCategory[] = [
    {name: 'Animal', example: 'cat'},
    {name: 'Kitchen', example: 'gas cooker'},
    {name: 'Furniture', example: 'gas cooker'},
    {name: 'Health and Beauty', example: 'gas cooker'},
    {name: 'Sound System', example: 'beatbox!'},
    {name: 'Stationery', example: 'pen'},
  ];

  deliveryLocation = new FormControl('', Validators.required);
  chosenFormControl = new FormControl('', Validators.required);
  locators: DeliveryLocation[] = [
    {location: 'Kwale', pin: 'https://goo.gl/maps/T6bK1QMCCnnPsAd19'},
    {location: 'Kisumu', pin: 'https://goo.gl/maps/T6bK1QMCCnnPsAd19'},
    {location: 'Nanyuki', pin: 'https://goo.gl/maps/T6bK1QMCCnnPsAd19'},
    {location: 'Eldoret', pin: 'https://goo.gl/maps/T6bK1QMCCnnPsAd19'},
  ];

  public lineChartData$: Observable<LineChartData>
  public dashedLineChartData$: Observable<DashedLineChartData>
  public pieChartData$: Observable<PieChartData>
  public heatmapChartData$: Observable<HeatmapChartData>

  constructor(private service: ChartsService, private productService: ProductService,private _formBuilder: FormBuilder) {
    this.lineChartData$ = this.service.loadLineChartData();
    this.dashedLineChartData$ = this.service.dashedLineChartData();
    this.pieChartData$ = this.service.loadPieChartData();
    this.heatmapChartData$ = this.service.loadHeatmapChartData();
 }

  public onAddProduct(addForm: NgForm): void {
    if(addForm.value != null){
      this.productService.addProduct(addForm.value).subscribe(
        (response: Product) => {
          console.log(response);
          alert("New product successfully added");
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
     );
    }
else{
  alert("Make sure all entries are not empty")
}
  }





  productName = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.productName.hasError('required')) {
      return 'You must enter a value';
    }

    return this.productName.hasError('productName') ? 'Not a valid productName' : '';
  }
}
