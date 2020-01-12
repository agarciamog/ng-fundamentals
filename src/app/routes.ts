import { Routes } from '@angular/router';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent
} from './events';

import {
  EventRouteActivatorService,
  EventRouteDeactivatorService,
  EventsListResolverService
} from './services';

import { Error404Component } from './errors';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: [EventRouteDeactivatorService]},
  { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService} },
  { path: 'session/new', component: CreateSessionComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];
