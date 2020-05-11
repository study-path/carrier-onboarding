import { Component, Input, OnInit } from '@angular/core';

import { StepStatus } from './../../shared/step-status.enum';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() stepTitles: string[];
  @Input() currentStepNumber: number;

  constructor() { }

  ngOnInit(): void {
  }

  getStepStatus(stepNumber: number): StepStatus {
    if (this.currentStepNumber > stepNumber) {
      return StepStatus.Finished;
    }
    else if (this.currentStepNumber < stepNumber) {
      return StepStatus.Empty
    }

    return StepStatus.Active
  }

}
