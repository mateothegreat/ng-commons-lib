import { TestBed, inject } from '@angular/core/testing';

import { CommonsLibSessionsService } from './commons-lib-sessions.service';

describe('CommonsLibSessionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonsLibSessionsService]
    });
  });

  it('should be created', inject([CommonsLibSessionsService], (service: CommonsLibSessionsService) => {
    expect(service).toBeTruthy();
  }));
});
