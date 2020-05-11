import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OtherDetailsComponent } from './other-details.component';


const routes: Routes = [
  { path: '', component: OtherDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherDetailsRoutingModule { }
