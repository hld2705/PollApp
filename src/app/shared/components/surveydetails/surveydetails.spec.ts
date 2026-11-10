import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Surveydetails } from './surveydetails';

describe('Surveydetails', () => {
  let component: Surveydetails;
  let fixture: ComponentFixture<Surveydetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Surveydetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Surveydetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
