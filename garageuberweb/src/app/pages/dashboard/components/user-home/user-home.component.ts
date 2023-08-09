import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RegisterGarage } from 'src/app/models/register_garage';


import { routes } from '../../../../consts';
import { User } from '../../../../pages/auth/models';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  public garages: RegisterGarage[];
  public routes: typeof routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

  //logout
  @Input() user: User;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();

  public signOutEmit(): void {
    this.signOut.emit();
  }
}
