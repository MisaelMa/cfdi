import { describe, it, expect } from 'vitest';
import { stringObjToNumerico } from '../../src/utils/number.utils';


describe('stringObjToNumerico', () => {
  it('debería convertir las propiedades de tipo string a número manteniendo los decimales', () => {
    const obj = { a: '100.00', b: '200.50', c: '300', d: 100, e: '1500.503020' };
    const resultado = stringObjToNumerico(obj);
    expect(resultado).toEqual({ a: 100.00, b: 200.50, c: 300, d: 100 , e: 1500.503020 });
  });

  it('debería mantener intactas las propiedades de tipo number', () => {
    const obj = { a: '1', b: 2, c: '3.5' };
    const resultado = stringObjToNumerico(obj);
    expect(resultado).toEqual({ a: 1, b: 2, c: 3.5 });
  });

  it('debería ignorar propiedades que no son strings ni numbers', () => {
    const obj = { a: '1.00', b: true, c: { nested: 'value' }, d: '2' };
    const resultado = stringObjToNumerico(obj);
    expect(resultado).toEqual({ a: 1.00, b: true, c: { nested: 'value' }, d: 2 });
  });

  it('debería devolver un objeto vacío si la entrada es un objeto vacío', () => {
    const obj = {};
    const resultado = stringObjToNumerico(obj);
    expect(resultado).toEqual({});
  });

  it('debería manejar cadenas que no pueden convertirse en números', () => {
    const obj = { a: 'notANumber', b: '123', c: '3.14' };
    const resultado = stringObjToNumerico(obj);
    expect(resultado).toEqual({ a: NaN, b: 123, c: 3.14 });
  });
});
