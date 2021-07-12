import { TestBed } from '@angular/core/testing';

import { EventEmitterMatchService } from './event-emitter-match.service';

describe('EventEmitterMatchService', () => {
  let service: EventEmitterMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEmitterMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
