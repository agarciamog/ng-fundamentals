import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '..';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string;
  sortBy: string;

  constructor(private eventService: EventService,
              private route: ActivatedRoute) {
    this.filterBy = 'all';
    this.sortBy = 'votes';
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
    });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancel() {
    this.addMode = false;
  }
}
