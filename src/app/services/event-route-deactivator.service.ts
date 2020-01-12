import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router } from '@angular/router';
import { CreateEventComponent } from '../events/create-event/create-event.component';

@Injectable()
export class EventRouteDeactivatorService implements CanDeactivate<CreateEventComponent> {

  constructor(private router: Router) {

  }
  canDeactivate(component: CreateEventComponent, route: ActivatedRouteSnapshot): boolean {
    if (component.isDirty) {
      return window.confirm('You have not saved this event, do you really want to cancel?');
    }

    return true;
  }

}
