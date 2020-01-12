import { EventService } from './event.service';

describe('EventService', () => {

  it('should return events', function () {
    let service: EventService;
    service = new EventService();

    expect(service.getEvents()).toBeDefined();
  });
});
