import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<void>();
  public form: FormGroup;
  public adminmail = 'garageuber.services@gmail.com';
  public adminPassword = 'admin';

  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(this.adminmail, [Validators.required, Validators.email]),
      password: new FormControl(this.adminPassword, [Validators.required])
    });
  }

  public login(): void {
    if (this.form.valid) {
      this.sendLoginForm.emit();
    }
  }
}
