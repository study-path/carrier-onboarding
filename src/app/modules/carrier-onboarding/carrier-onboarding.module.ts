import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxsModule } from '@ngxs/store';

import { CarrierOnboardingRoutingModule } from './carrier-onboarding-routing.module';
import { CarrierOnboardingComponent } from './carrier-onboarding.component';
import { StepComponent } from './components/step/step.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { CarrierOnboardingState } from './state/carrier-onboarding.state';

const matModules = [
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [CarrierOnboardingComponent, StepperComponent, StepComponent],
  imports: [
    CommonModule,
    CarrierOnboardingRoutingModule,
    FlexLayoutModule,
    NgxsModule.forFeature([CarrierOnboardingState]),
    ...matModules
  ]
})
export class CarrierOnboardingModule { }
