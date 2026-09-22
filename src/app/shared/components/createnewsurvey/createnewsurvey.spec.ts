import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createnewsurvey } from './createnewsurvey';

describe('Createnewsurvey', () => {
  let component: Createnewsurvey;
  let fixture: ComponentFixture<Createnewsurvey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createnewsurvey],
    }).compileComponents();

    fixture = TestBed.createComponent(Createnewsurvey);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
