import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TablesPageComponent } from './containers';
import { TablesRoutingModule } from './tables-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { EmployeeTableComponent, MaterialTableComponent } from './components';
import { TablesService } from './services';
import { SupplierTableComponent } from './components/supplier-table/supplier-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PendingComponent } from './components/pending/pending.component';
import { DeliveredComponent } from './components/delivered/delivered.component';
import { CancelledComponent } from './components/cancelled/cancelled.component';

@NgModule({
  declarations: [
    TablesPageComponent,
    MaterialTableComponent,
    EmployeeTableComponent,
    SupplierTableComponent,
    PendingComponent,
    DeliveredComponent,
    CancelledComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    SharedModule
  ],
  providers: [
    TablesService
  ]
})
export class TablesModule { }
