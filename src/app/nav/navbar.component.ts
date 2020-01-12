import { Component} from '@angular/core';
import { AuthService, EventService } from '../services';
import { ISession } from '../events';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {
  searchTerm: string;
  foundSessions: ISession[];

  constructor(protected auth: AuthService, private eventServerice: EventService) {
    this.searchTerm = '';
  }

  searchSessions(searchTerm) {
    this.eventServerice.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
    });
  }
}
