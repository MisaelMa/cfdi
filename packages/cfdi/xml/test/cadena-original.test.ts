import { describe, it, expect, vi } from 'vitest';
import { CFDI } from '../src';

describe('CFDI', () => {
    it('debería retornar un error al generar la cadena original', async () => {

        const cfdi = new CFDI({ xslt: { path: 'error.xslt' } });
        cfdi.setDebug(true);
    
        const consoleSpy = vi.spyOn(console, 'log') //.mockImplementation(() => {});
    
        const cadenaOriginal = await cfdi.generarCadenaOriginal();
        expect(cadenaOriginal).toBeInstanceOf(Error);
        
        expect(consoleSpy).toBeCalledWith({
          error:  "No se puede encontrar el archivo para la cadena original!.",
          method: 'getCadenaOriginal',
        });
    
        consoleSpy.mockRestore();
      });
    
})