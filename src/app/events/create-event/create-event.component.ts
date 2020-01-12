import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '..';
import { EventService } from '../../services';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  private _isDirty = true;
  newEvent: IEvent;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
  }

  get isDirty(): boolean {
    return this._isDirty;
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  saveEvent(event: IEvent) {
    this.eventService.saveEvent(event);
    this._isDirty = false;
    this.router.navigate(['/events']);
  }
}
