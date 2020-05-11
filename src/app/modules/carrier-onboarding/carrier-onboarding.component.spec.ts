import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierOnboardingComponent } from './carrier-onboarding.component';

describe('CarrierOnboardingComponent', () => {
  let component: CarrierOnboardingComponent;
  let fixture: ComponentFixture<CarrierOnboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierOnboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
