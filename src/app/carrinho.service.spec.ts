import { TestBed } from '@angular/core/testing';

import { CarrrinhoService } from './carrinho.service';

describe('CarrrinhoService', () => {
  let service: CarrrinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrrinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
