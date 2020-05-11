import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'carrier-onboarding',
    pathMatch: 'full'
  },
  {
    path: 'carrier-onboarding',
    loadChildren: () => import('./modules/carrier-onboarding/carrier-onboarding.module').then(m => m.CarrierOnboardingModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
