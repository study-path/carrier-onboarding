import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InsuranceAutoComponent } from './insurance-auto.component';

const routes: Routes = [
  { path: '', component: InsuranceAutoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceAutoRoutingModule { }
