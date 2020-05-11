import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarrierOnboardingComponent } from './carrier-onboarding.component';


const routes: Routes = [
  {
    path: '',
    component: CarrierOnboardingComponent,
    children: [
      {
        path: '',
        redirectTo: 'carrier',
        pathMatch: 'full'
      },
      {
        path: 'carrier',
        loadChildren: () => import('./modules/carrier/carrier.module').then(m => m.CarrierModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'other-details',
        loadChildren: () => import('./modules/other-details/other-details.module').then(m => m.OtherDetailsModule)
      },
      {
        path: 'insurance-auto',
        loadChildren: () => import('./modules/insurance-auto/insurance-auto.module').then(m => m.InsuranceAutoModule)
      },
      {
        path: 'insurance-cargo',
        loadChildren: () => import('./modules/insurance-cargo/insurance-cargo.module').then(m => m.InsuranceCargoModule)
      },
      {
        path: 'attachments',
        loadChildren: () => import('./modules/attachments/attachments.module').then(m => m.AttachmentsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrierOnboardingRoutingModule { }
