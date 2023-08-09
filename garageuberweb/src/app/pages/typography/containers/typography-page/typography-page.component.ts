import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { routes } from 'src/app/consts';
import { RegisterUser } from 'src/app/models/register_user';
import { RegisterUserService } from '../../service/register-user.service';
import { SupplierService } from '../../service/supplier.service';

export interface Supplier {
  id: number;
  name: string;
  email: string;
  location: string;
  phone: string;
  imageUrl: string;
  supplierCode: string;
}

@Component({
  selector: 'app-typography-page',
  templateUrl: './typography-page.component.html',
  styleUrls: ['./typography-page.component.scss']
})
export class TypographyPageComponent implements OnInit {

  public users: RegisterUser[];
  public editUsers: RegisterUser;
  public deleteUser: RegisterUser;

  public routes: typeof routes = routes;


  constructor(private registerUserService : RegisterUserService) { }

  ngOnInit(): void {
    this.getUsers();
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


  public onUpdateUser(user: RegisterUser): void {
    this.registerUserService.updateUser(user).subscribe(
      (response: RegisterUser) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onDeleteUser(userId: number): void {
    this.registerUserService.deleteUser(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public searchUsers(key: string): void {
    console.log(key);
    const results: RegisterUser[] = [];
    for (const user of this.users) {
      if (user.userName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.userLocation.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.userRequestedService.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.userImageURL.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(user);
      }
    }
    this.users = results;
    if (results.length === 0 || !key) {
      this.getUsers();
    }
  }

  public onOpenModal(user: RegisterUser, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUserModal');
    }
    if (mode === 'edit') {
      this.editUsers = user;
      button.setAttribute('data-target', '#updateUserModal');
    }
    if (mode === 'delete') {
      this.deleteUser = user;
      button.setAttribute('data-target', '#deleteUserModal');
    }
    container.appendChild(button);
    button.click();
  }
}
