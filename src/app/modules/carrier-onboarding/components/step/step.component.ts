import { Component, Input, OnInit } from '@angular/core';

import { StepStatus } from '../../shared/step-status.enum';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() status: StepStatus;
  @Input() step: number;
  @Input() title: string;

  stepStatus = StepStatus;

  constructor() { }

  ngOnInit(): void {
  }

  getClass() {

  }

}
