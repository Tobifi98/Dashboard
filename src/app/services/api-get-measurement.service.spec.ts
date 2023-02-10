import { TestBed } from '@angular/core/testing';

import { APIGetMeasurementService } from './api-get-measurement.service';

describe('APIGetMeasurementService', () => {
  let service: APIGetMeasurementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIGetMeasurementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
