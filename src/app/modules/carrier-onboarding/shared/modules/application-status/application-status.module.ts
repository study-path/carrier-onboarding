import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApplicationStatusComponent } from './application-status.component';



@NgModule({
  declarations: [ApplicationStatusComponent],
  imports: [
    CommonModule
  ],
  exports: [ApplicationStatusComponent]
})
export class ApplicationStatusModule { }
