import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';
import { routes } from '../../../../consts';
import { RegisterUserService } from 'src/app/pages/typography/service/register-user.service';
import { RegisterUser } from 'src/app/models/register_user';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { RegisterGarage } from 'src/app/models/register_garage';
import { RegisterGarageService } from 'src/app/pages/tables/services/register-garage.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  public todayDate: Date = new Date();
  public routers: typeof routes = routes;
  public users: RegisterUser[];
  public garages: RegisterGarage[];


  constructor(
    private service: AuthService,
    private registerUserService : RegisterUserService,
    private registerGarageService: RegisterGarageService,
    private router: Router
  ) { }

  public sendLoginForm(): void {
    this.service.login();

    this.router.navigate([this.routers.DASHBOARD]).then();
  }

  public sendSupplierLoginForm(): void {
    this.service.login();

    this.router.navigate([this.routers.SUPLIER_HOME]).then();
  }

  public sendUserLoginForm(): void {
    this.service.login();

    this.router.navigate([this.routers.USER_HOME]).then();
  }

  public sendGarageLoginForm(): void {
    this.service.login();

    this.router.navigate([this.routers.GARAGE_HOME]).then();
  }

  public sendSignForm(): void {
    this.service.sign();

    this.router.navigate([this.routers.DASHBOARD]).then();
  }


  public getUsers(): void {
    this.registerUserService.getUsers().subscribe(
      (response: RegisterUser[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getGarages(): void {
    this.registerGarageService.getgarages().subscribe(
      (response: RegisterGarage[]) => {
        this.garages = response;
        console.log(this.garages);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddUser(addForm: NgForm): void {
    document.getElementById('add-user-form').click();
    this.registerUserService.addUser(addForm.value).subscribe(
      (response: RegisterUser) => {
        console.log(response);
        alert("New User registered successfully!");
        this.getUsers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onAddGarage(addForm: NgForm): void {
    document.getElementById('add-garage-form').click();
    this.registerGarageService.addGarage(addForm.value).subscribe(
      (response: RegisterGarage) => {
        console.log(response);
        alert("New Garage registered successfully!");
        this.getGarages();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onOpenModal(user: RegisterUser, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'registerUser') {
      button.setAttribute('data-target', '#addUserModal');
    }
    if (mode === 'registerGarage') {
      button.setAttribute('data-target', '#addGarageModal');
    }
    container.appendChild(button);
    button.click();
  }
}
