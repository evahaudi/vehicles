import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './pages/dashboard/containers';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {AuthGuard} from './pages/auth/guards';
import { PendingComponent } from './pages/tables/components/pending/pending.component';
import { CancelledComponent } from './pages/tables/components/cancelled/cancelled.component';
import { DeliveredComponent } from './pages/tables/components/delivered/delivered.component';
import { LoginSupplierComponent } from './pages/auth/components/login-supplier/login-supplier.component';
import { SupplierHomeComponent } from './pages/dashboard/components/supplier-home/supplier-home.component';
import { ContactComponent } from './shared/contact/contact.component';
import { UserHomeComponent } from './pages/dashboard/components/user-home/user-home.component';
import { GaragesHomeComponent } from './pages/dashboard/components/garages-home/garages-home.component';
import { GarageProfilePageComponent } from './pages/dashboard/components/garage-profile-page/garage-profile-page.component';
import { AllGaragesComponent } from './pages/dashboard/components/all-garages/all-garages.component';
import { GarageServicesComponent } from './pages/dashboard/components/garage-services/garage-services.component';
import { ManageRequestsComponent } from './pages/dashboard/components/manage-requests/manage-requests.component';
import { UserReviewPageComponent } from './pages/dashboard/components/user-review-page/user-review-page.component';
import { GarageReviewPageComponent } from './pages/dashboard/components/garage-review-page/garage-review-page.component';
import { PaymentComponent } from './pages/dashboard/components/payment/payment.component';

const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: DashboardPageComponent
  },
  {
    path: 'typography',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/typography/typography.module').then(m => m.TypographyModule)
  },
  {
    path: 'tables',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'pending',
    component: PendingComponent
  },
  {
    path: 'cancelled',
    component: CancelledComponent
  },
  {
    path: 'delivered',
    component: DeliveredComponent
  },
  {
    path: 'stripe_payment',
    component: PaymentComponent
  },
  {
    path: 'supplier_home',
    component: SupplierHomeComponent
  },
  {
    path: 'user_home',
    component: UserHomeComponent
  },
  {
    path: 'user_review_page',
    component: UserReviewPageComponent
  },
  {
    path: 'garage_home',
    component: GaragesHomeComponent
  },
  {
    path: 'garage_review_page',
    component: GarageReviewPageComponent
  },
  {
    path: 'manage_requests',
    component: ManageRequestsComponent
  },
  {
    path: 'garage_active_services',
    component: GarageServicesComponent
  },
  {
    path: 'all_garages',
    component: AllGaragesComponent
  },
  {
    path: 'garage_profile',
    component: GarageProfilePageComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'notification',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationModule)
  },
  {
    path: 'ui',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/ui-elements/ui-elements.module').then(m => m.UiElementsModule)
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
