import { TestBed } from '@angular/core/testing';

import { MovieService } from './movies.service';

describe('MoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });
});
