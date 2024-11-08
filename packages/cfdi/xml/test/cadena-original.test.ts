import { describe, it, expect, vi } from 'vitest';
import { CFDI } from '../src';
import { Logger } from '../src/utils/Logger';

describe('CFDI', () => {
  it('debería retornar un error al generar la cadena original', async () => {
    const spy = vi.spyOn(Logger, 'error').mockImplementation(() => {});
    const cfdi = new CFDI({ xslt: { path: 'error.xslt' } });
    cfdi.setDebug(true);
    expect(() => cfdi.generarCadenaOriginal()).toThrow();
    expect(() => cfdi.generarCadenaOriginal()).toThrow('No se puede encontrar el archivo para la cadena original!.');
  });

  it('debería lanzar un error al generar la cadena original', async () => {
    const cfdi = new CFDI();

    expect(() => cfdi.generarCadenaOriginal()).toThrow(Error);
    expect(() => cfdi.generarCadenaOriginal()).toThrow('¡Ups! Direcction Not Found Extensible Stylesheet Language Transformation');
  });
});
