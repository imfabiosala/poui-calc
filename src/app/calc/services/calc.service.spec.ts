import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  /* Deve garantir que: (1 + 1 = 2) */
  it('must ensure that: (1 + 1 = 2)', () => {
      let sum = service.calc(1, 1, CalcService.SUM);
      expect(sum).toEqual(2);
  });

  /* Deve garantir que: (3 - 1 = 2) */
  it('must ensure that: (3 - 1 = 2)', () => {
    let sub = service.calc(3, 1, CalcService.SUB);
    expect(sub).toEqual(2);
  });

  /* Deve garantir que: (6 / 2 = 3) */
  it('must ensure that: (6 / 2 = 3)', () => {
    let div = service.calc(6, 2, CalcService.DIV);
    expect(div).toEqual(3);
  });

  /* Deve garantir que: (3 * 2 = 6) */
  it('must ensure that: (3 * 2 = 6)', () => {
    let mul = service.calc(3, 2, CalcService.MUL);
    expect(mul).toEqual(6);
  });

  /* Deve garantir que: (4 % 2 = 0) */
  it('must ensure that: (4 % 2 = 0)', () => {
    let mul = service.calc(4, 2, '%');
    expect(mul).toEqual(0);
  });

});
