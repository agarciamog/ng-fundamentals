import {Component, EventEmitter, Input, Output} from '@angular/core';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: [ './event-thumbnail.component.css' ]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass(): any {
    const isEarlyStartTime: boolean = this.event.time === '8:00 am';
    return {'green bold': isEarlyStartTime};
  }
}
