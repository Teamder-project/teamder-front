import { TestBed } from '@angular/core/testing';

import { GamerService } from './gamer.service';

describe('AccountService', () => {
  let service: GamerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
