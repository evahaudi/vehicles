import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Email } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  public loadEmails(): Observable<Email[]> {
    return of([
      {name: 'Integrer Dev. Team', time: '9:32', message: 'Hey! Thank you for choosing us!'},
      {name: 'Integrer Dev. Team', time: '9:18', message: 'You do not have chat functionality, however this is how it would look like'},
      // {name: 'Mark Winstein', time: '9:15', message: 'I want rearrange the appointment'},
      {name: 'Help Community', time: '9:09', message: 'Email us at nellyarsey7@gmail.com'}
    ])
  }
}
