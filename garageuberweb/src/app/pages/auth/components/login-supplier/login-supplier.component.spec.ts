import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSupplierComponent } from './login-supplier.component';

describe('LoginSupplierComponent', () => {
  let component: LoginSupplierComponent;
  let fixture: ComponentFixture<LoginSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
