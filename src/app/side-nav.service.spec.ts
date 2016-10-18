/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SideNavService } from './side-nav.service';

describe('Service: Sidenav', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideNavService]
    });
  });

  it('should ...', inject([SideNavService], (service: SideNavService) => {
    expect(service).toBeTruthy();
  }));
});
