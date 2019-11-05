import { TestBed } from '@angular/core/testing';

import { GetGroceryListService } from './get-grocery-list.service';

describe('GetGroceryListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetGroceryListService = TestBed.get(GetGroceryListService);
    expect(service).toBeTruthy();
  });
});
