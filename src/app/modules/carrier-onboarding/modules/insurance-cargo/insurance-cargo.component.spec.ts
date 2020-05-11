import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCargoComponent } from './insurance-cargo.component';

describe('InsuranceCargoComponent', () => {
  let component: InsuranceCargoComponent;
  let fixture: ComponentFixture<InsuranceCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
