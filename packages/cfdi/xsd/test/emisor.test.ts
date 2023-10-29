import { describe, expect, it, test } from 'vitest';

import { Schema } from '../src'; // Reemplaza con la ruta correcta a tu clase Schema

// Configura la instancia de Schema
const validate = Schema.of();
validate.setConfig({
  path: '/Users/amir/Documents/proyectos/amir/cfdi/packages/cfdi/schema/src/files/schema',
});

const emisor = validate.cfdi.emisor;
describe('Emisor', () => {
  it('Debería validar un objeto de Emisor válido', () => {
    const objetoEmisorValido = {
      Rfc: 'LAN7008173R59',
      Nombre: 'amir',
      RegimenFiscal: '601',
    };

    expect(emisor(objetoEmisorValido)).toBe(true);
  });

  it('Debería rechazar un objeto de Emisor inválido', () => {
    const objetoEmisorInvalido = {
      // Propiedad faltante (Rfc)
      Nombre: 'amir',
      RegimenFiscal: '699',
    };

    expect(emisor(objetoEmisorInvalido)).toBe(false);
  });

  it('Debería rechazar un objeto con valores vacíos', () => {
    const objetoEmisorVacio = {
      Rfc: '',
      Nombre: '',
      RegimenFiscal: '',
    };

    expect(emisor(objetoEmisorVacio)).toBe(false);
  });

  // Prueba 2: Debería rechazar un objeto con un RFC inválido
  it('Debería rechazar un objeto con un RFC inválido', () => {
    const objetoEmisorRfcInvalido = {
      Rfc: 'RFC_INVALIDO',
      Nombre: 'amir',
      RegimenFiscal: '699',
    };

    expect(emisor(objetoEmisorRfcInvalido)).toBe(false);
  });

  // Prueba 3: Debería rechazar un objeto con un nombre que excede la longitud máxima
  it('Debería rechazar un objeto con un nombre que excede la longitud máxima', () => {
    const nombreLargo = 'a'.repeat(301); // Genera un nombre de 301 caracteres

    const objetoEmisorNombreLargo = {
      Rfc: 'LAN7008173R59',
      Nombre: nombreLargo,
      RegimenFiscal: '699',
    };

    expect(emisor(objetoEmisorNombreLargo)).toBe(false);
  });

  // Prueba 4: Debería validar un objeto con atributo condicional
  it('Debería validar un objeto con atributo condicional', () => {
    const objetoEmisorConAtributoCondicional = {
      Rfc: 'LAN7008173R59',
      Nombre: 'amir',
      RegimenFiscal: '601',
      FacAtrAdquirente: '1234567890',
    };

    expect(emisor(objetoEmisorConAtributoCondicional)).toBe(true);
  });

  // Prueba 5: Debería rechazar un objeto con atributo condicional inválido
  it('Debería rechazar un objeto con atributo condicional inválido', () => {
    const objetoEmisorConAtributoCondicionalInvalido = {
      Rfc: 'LAN7008173R59',
      Nombre: 'amir',
      RegimenFiscal: '699',
      FacAtrAdquirente: 'ABC', // No cumple con el patrón de 10 dígitos
    };

    expect(emisor(objetoEmisorConAtributoCondicionalInvalido)).toBe(false);
  });
});
