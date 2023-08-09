import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AgmCoreModule } from '@agm/core';

import {
  DashedLineChartComponent,
  HeatmapChartComponent,
  IconsPageComponent,
  LineChartComponent,
  PieChartComponent
} from './components';
import {
  ChartsPageComponent,
  MapPageComponent
} from './containers';
import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ChartsService } from './services';
import { DashboardModule } from '../dashboard/dashboard.module';
import { googleMapKey } from './consts';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    IconsPageComponent,
    ChartsPageComponent,
    MapPageComponent,
    LineChartComponent,
    DashedLineChartComponent,
    PieChartComponent,
    HeatmapChartComponent
  ],
  imports: [
    CommonModule,
    UiElementsRoutingModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    NgApexchartsModule,
    AgmCoreModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey: googleMapKey
    }),
    MatToolbarModule,
    SharedModule,
    ReactiveFormsModule,
    DashboardModule,
  ],
  providers: [
    ChartsService
  ]
})
export class UiElementsModule { }
