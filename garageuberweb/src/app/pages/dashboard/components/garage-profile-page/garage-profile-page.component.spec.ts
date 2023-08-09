import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageProfilePageComponent } from './garage-profile-page.component';

describe('GarageProfilePageComponent', () => {
  let component: GarageProfilePageComponent;
  let fixture: ComponentFixture<GarageProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
