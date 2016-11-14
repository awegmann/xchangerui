/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { WallService } from './wall.service';

describe('Service: Wall', () => {
  beforeEach(() => {
    addProviders([WallService]);
  });

  it('should ...',
    inject([WallService],
      (service: WallService) => {
        expect(service).toBeTruthy();
      }));
});
