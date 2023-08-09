import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageReviewPageComponent } from './garage-review-page.component';

describe('GarageReviewPageComponent', () => {
  let component: GarageReviewPageComponent;
  let fixture: ComponentFixture<GarageReviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageReviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageReviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
