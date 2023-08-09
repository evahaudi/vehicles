import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-supplier',
  templateUrl: './login-supplier.component.html',
  styleUrls: ['./login-supplier.component.scss']
})
export class LoginSupplierComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<void>();
  public form: FormGroup;
  public adminmail = 'garage@uber.com';
  public adminPassword = '123';

  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(this.adminmail, [Validators.required, Validators.email]),
      password: new FormControl(this.adminPassword, [Validators.required])
    });
  }

  public loggedInSuplier(): string{
    this.form.value;
    return this.form.get('email').value;
  }

  public login(): void {
    if (this.form.valid) {
      this.sendLoginForm.emit();
      console.log(this.loggedInSuplier());
      console.log('trick')
      localStorage.setItem('loggedin_username', this.loggedInSuplier());
    }
    console.log('Test invalid form');
  }

  constructor() { }


}
