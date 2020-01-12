import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './event.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const exist: boolean = !!this.eventService.getEvent(parseInt(route.params['id'], 10));

    if (!exist) {
      this.router.navigate(['404']);
    }

    return exist;
  }
}
