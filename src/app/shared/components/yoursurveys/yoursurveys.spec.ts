import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yoursurveys } from './yoursurveys';

describe('Yoursurveys', () => {
  let component: Yoursurveys;
  let fixture: ComponentFixture<Yoursurveys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Yoursurveys],
    }).compileComponents();

    fixture = TestBed.createComponent(Yoursurveys);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
