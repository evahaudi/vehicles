import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RegisterGarage } from 'src/app/models/register_garage';
import { RegisterGarageService } from 'src/app/pages/tables/services/register-garage.service';
import { routes } from '../../../../consts';
import { User } from '../../../../pages/auth/models';

@Component({
  selector: 'app-garages-home',
  templateUrl: './garages-home.component.html',
  styleUrls: ['./garages-home.component.scss']
})
export class GaragesHomeComponent implements OnInit {
 owner: string = '';

 public garages: RegisterGarage[];



  constructor(
    private registerGarageService: RegisterGarageService
  ) { }

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
