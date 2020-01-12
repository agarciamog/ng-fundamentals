import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '..';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  private eventService: EventService;
  events: IEvent[];
  constructor(eventService: EventService, private route: ActivatedRoute) {
    this.eventService = eventService;
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
