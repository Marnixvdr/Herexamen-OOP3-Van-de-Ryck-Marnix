import { TestBed } from '@angular/core/testing';

import { OvertredingenServiceService } from './overtredingen-service.service';

describe('OvertredingenServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OvertredingenServiceService = TestBed.get(OvertredingenServiceService);
    expect(service).toBeTruthy();
  });
});
