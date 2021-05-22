import { TestBed } from '@angular/core/testing';

import { NgRouterService } from './ng-router.service';

describe('NgRouterService', () => {
  let service: NgRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
