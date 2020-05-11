import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';

import { SetFormStatus } from '../../state/carrier-onboarding.actions';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.scss']
})
export class CarrierComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      carrier: [null, Validators.required],
      dotNumber: [null],
      address: [null, Validators.required],
      phone: [],
      cellular: [],
      country: [null, Validators.required],
      province: [null, Validators.required],
      emailAddress: [null, Validators.required],
      address2: [null],
      ext: [null],
      city: [null, Validators.required],
      fax: [null],
      postalCode: [null, Validators.required]
    });

    this.formGroup
      .valueChanges
      .subscribe(() => this.store.dispatch(new SetFormStatus(this.formGroup.valid)));
  }
}
