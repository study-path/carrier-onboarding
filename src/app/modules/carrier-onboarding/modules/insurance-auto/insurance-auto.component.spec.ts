import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAutoComponent } from './insurance-auto.component';

describe('InsuranceAutoComponent', () => {
  let component: InsuranceAutoComponent;
  let fixture: ComponentFixture<InsuranceAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
