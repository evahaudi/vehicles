import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { routes } from 'src/app/consts';
import { RegisterGarage } from 'src/app/models/register_garage';
import { User } from 'src/app/pages/auth/models';
import { RegisterGarageService } from 'src/app/pages/tables/services/register-garage.service';


@Component({
  selector: 'app-garage-profile-page',
  templateUrl: './garage-profile-page.component.html',
  styleUrls: ['./garage-profile-page.component.scss']
})
export class GarageProfilePageComponent implements OnInit {
 owner: string = '';
 public garages: RegisterGarage[];
 public editGarage: RegisterGarage;


  constructor(private registerGarageService: RegisterGarageService) { }

  ngOnInit(): void {
    this.getGarages();
    this.owner = this.getLoggedInUsername();
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

  public onUpdateGarage(garage: RegisterGarage): void {
    this.registerGarageService.updateGarage(garage).subscribe(
      (response: RegisterGarage) => {
        console.log(response);
        this.getGarages();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(garage: RegisterGarage, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addGarageModal');
    }
    if (mode === 'edit') {
      this.editGarage = garage;
      button.setAttribute('data-target', '#updateGarageModal');
    }
    container.appendChild(button);
    button.click();
  }

  public getLoggedInUsername(): string {
    return localStorage.getItem('loggedin_username');
  }

  //logout
  @Input() user: User;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;
  public flatlogicEmail: string = "garageuber@gmail.com";

  public signOutEmit(): void {
    this.signOut.emit();
  }

}
