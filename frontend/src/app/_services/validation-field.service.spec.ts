import { TestBed } from '@angular/core/testing';

import { ValidationFieldService } from './validation-field.service';

describe('ValidationFieldService', () => {
  let service: ValidationFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
