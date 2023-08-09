import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NgxEchartsModule } from 'ngx-echarts';
import { TrendModule } from 'ngx-trend';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';

import { DashboardPageComponent } from './containers';
import {
  VisitsChartComponent,
  PerformanceChartComponent,
  ServerChartComponent,
  RevenueChartComponent,
  DailyLineChartComponent,
  SupportRequestsComponent,
  ProjectStatChartComponent
} from './components';
import { SharedModule } from '../../shared/shared.module';
import { DashboardService } from './services';
import { SupplierHomeComponent } from './components/supplier-home/supplier-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { GaragesHomeComponent } from './components/garages-home/garages-home.component';
import { GarageProfilePageComponent } from './components/garage-profile-page/garage-profile-page.component';
import { RouterModule } from '@angular/router';
import { AllGaragesComponent } from './components/all-garages/all-garages.component';
import { GarageServicesComponent } from './components/garage-services/garage-services.component';
import { ManageRequestsComponent } from './components/manage-requests/manage-requests.component';
import { UserReviewPageComponent } from './components/user-review-page/user-review-page.component';
import { GarageReviewPageComponent } from './components/garage-review-page/garage-review-page.component';
import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    VisitsChartComponent,
    PerformanceChartComponent,
    ServerChartComponent,
    RevenueChartComponent,
    DailyLineChartComponent,
    SupportRequestsComponent,
    ProjectStatChartComponent,
    SupplierHomeComponent,
    UserHomeComponent,
    GarageProfilePageComponent,
    GaragesHomeComponent,
    AllGaragesComponent,
    GarageProfilePageComponent,
    AllGaragesComponent,
    GarageServicesComponent,
    ManageRequestsComponent,
    UserReviewPageComponent,
    GarageReviewPageComponent,
    PaymentComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    NgxEchartsModule,
    TrendModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    NgApexchartsModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    DailyLineChartComponent
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
