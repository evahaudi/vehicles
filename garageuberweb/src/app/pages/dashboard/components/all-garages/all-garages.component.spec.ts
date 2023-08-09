import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGaragesComponent } from './all-garages.component';

describe('AllGaragesComponent', () => {
  let component: AllGaragesComponent;
  let fixture: ComponentFixture<AllGaragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGaragesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
