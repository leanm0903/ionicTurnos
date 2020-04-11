import { TestBed } from '@angular/core/testing';

import { ApiConfigurationService } from './api-configuration.service';

describe('ApiConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiConfigurationService = TestBed.get(ApiConfigurationService);
    expect(service).toBeTruthy();
  });
});
