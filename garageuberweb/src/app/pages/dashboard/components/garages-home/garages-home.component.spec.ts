import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragesHomeComponent } from './garages-home.component';

describe('GaragesHomeComponent', () => {
  let component: GaragesHomeComponent;
  let fixture: ComponentFixture<GaragesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaragesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaragesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
