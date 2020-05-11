import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsModule } from '@ngxs/store';

import { ApplicationStatusModule } from '../../shared/modules/application-status/application-status.module';
import { CarrierRoutingModule } from './carrier-routing.module';
import { CarrierComponent } from './carrier.component';
import { CarrierState } from './state/carrier.state';

@NgModule({
  declarations: [CarrierComponent],
  imports: [
    CommonModule,
    CarrierRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    ApplicationStatusModule,
    MatIconModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([CarrierState]),
    NgxsFormPluginModule
  ]
})
export class CarrierModule { }
