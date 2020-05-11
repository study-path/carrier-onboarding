import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InsuranceCargoComponent } from './insurance-cargo.component';


const routes: Routes = [
  { path: '', component: InsuranceCargoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceCargoRoutingModule { }
