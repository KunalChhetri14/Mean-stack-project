import { TestBed } from '@angular/core/testing';

import { ServiceTutorialOnlineService } from './service-tutorial-online.service';

describe('ServiceTutorialOnlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceTutorialOnlineService = TestBed.get(
      ServiceTutorialOnlineService
    );
    expect(service).toBeTruthy();
  });
});
