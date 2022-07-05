import { TestBed } from '@angular/core/testing';

import { PocStorybookLibraryService } from './poc-storybook-library.service';

describe('PocStorybookLibraryService', () => {
  let service: PocStorybookLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PocStorybookLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
