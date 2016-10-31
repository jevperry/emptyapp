/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TagService } from './tag.service';

describe('Service: Tag', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagService]
    });
  });

  it('should return false if target has no tagprop field e.g tags', inject([TagService], (service: TagService) => {
    expect(service.matches({}, 'x')).toBeFalsy();
  }));
  it('target should match string tagexpr with string tag property', inject([TagService], (service: TagService) => {
    expect(service.matches({tags:'x'}, 'x')).toBeTruthy();
  }));
  it('target array should match tagexpr array', inject([TagService], (service: TagService) => {
    expect(service.matches({tags:['x']}, ['x'])).toBeTruthy();
  }));
  it('target array should match all of tagexpr array', inject([TagService], (service: TagService) => {
    expect(service.matches({tags:['x']}, {all: ['x']})).toBeTruthy();
  }));
  it('target array should match all of tagexpr array', inject([TagService], (service: TagService) => {
    expect(service.matches({tags:['x', 'y']}, {all: ['x', 'y']})).toBeTruthy();
  }));
  it('target array should match any of tagexpr array', inject([TagService], (service: TagService) => {
    expect(service.matches({tags:['x']}, {any: ['x', 'y']})).toBeTruthy();
  }));
});
