import { TestBed } from '@angular/core/testing';

import { OrganiserService } from './organiser.service';

describe('OrganiserService', () => {
  let service: OrganiserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganiserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
