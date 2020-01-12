import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventsAppComponent,
  SessionListComponent,
  CreateSessionComponent
} from './events';

import {
  EventService,
  EventsListResolverService,
  EventRouteActivatorService,
  EventRouteDeactivatorService,
  TOASTR_TOKEN,
  JQ_TOKEN,
  AuthService
} from './services';

import {
  CollapsibleWellComponent,
  DurationPipe,
  SimpleModalComponent,
  ModalTriggerDirective
} from './shared';

import { NavBarComponent } from './nav';
import { Error404Component } from './errors';
import { appRoutes } from './routes';

const toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivatorService,
    EventRouteDeactivatorService,
    EventsListResolverService,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
