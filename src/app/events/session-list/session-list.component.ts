import { Component, Input, OnChanges  } from '@angular/core';
import { ISession } from '..';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  constructor() { }

  // Any time that one of our inputs changes this method will be called.
  // For example, when the user clicks on Beginner in the event-detail.component
  // that will trigger a change to filterBy.
  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDesc);
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      // We don't want a reference assignment, we need to clone. Easy way is with
      // slice(0).
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filter);
    }
  }

  sortByNameAsc(s1: ISession, s2: ISession): number {
    if(s1.name > s2.name) {
      return 1;
    } else if (s1.name === s2.name) {
      return 0;
    } else {
      return -1;
    }
  }

  sortByVotesDesc(s1: ISession, s2: ISession): number {
    return s2.voters.length - s1.voters.length;
  }
}
