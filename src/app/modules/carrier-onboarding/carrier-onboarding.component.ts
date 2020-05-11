import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { CarrierOnboardingState } from './state/carrier-onboarding.state';

@Component({
  selector: 'app-carrier-onboarding',
  templateUrl: './carrier-onboarding.component.html',
  styleUrls: ['./carrier-onboarding.component.scss']
})
export class CarrierOnboardingComponent implements OnInit {
  @Select(CarrierOnboardingState.isFormValid) isFormValid$: Observable<boolean>;

  stepTitles: string[] = [
    'Carrier',
    'Contact',
    'Other Details',
    'Insurance:Auto',
    'Insurance:Cargo',
    'Attachments'];

  stepMapping = [
    'carrier',
    'contact',
    'other-details',
    'insurance-auto',
    'insurance-cargo',
    'attachments'
  ]

  currentStepNumber: number = 1;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  clickBack() {
    this.currentStepNumber--;
    this.router.navigate([this.stepMapping[this.currentStepNumber - 1]], { relativeTo: this.activateRoute });
  }

  clickNext() {
    this.router.navigate([this.stepMapping[this.currentStepNumber]], { relativeTo: this.activateRoute });
    this.currentStepNumber++;

    this.openSnackBar("Here form will be saved");
  }

  clickSave() {
    this.openSnackBar("Here form will be saved");
  }

  clickSubmit() {
    this.openSnackBar("Here form will be submitted");
  }

  openSnackBar(message) {
    const config = {
      duration: 2000,
      horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
      verticalPosition: 'bottom' as MatSnackBarVerticalPosition
    };
    this.snackBar.open(message, null, config);
  }

}
