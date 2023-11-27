import { describe, expect, it, test } from 'vitest';

import { Schema } from '../src'; // Reemplaza con la ruta correcta a tu clase Schema
import path from 'path';

// Configura la instancia de Schema
const schema = Schema.of();
const files = path.join(
  path.resolve(
    __dirname,
    '..',
    '..',
    '..',
    'cfdi',
    'schema',
    'src',
    'files',
    'schema'
  )
);
schema.setConfig({
  debug: false,
  path: files,
});

const receptor = schema.cfdi.receptor;
// Describe el conjunto de pruebas para el esquema del Receptor
describe('Validación del esquema del Receptor', () => {
  // Prueba 1: Debería validar un objeto de Receptor válido
  it('Debería validar un objeto de Receptor válido', () => {
    const objetoReceptorValido = {
      Rfc: 'LAN7008173R59',
      Nombre: 'amir',
      DomicilioFiscalReceptor: '12345',
      RegimenFiscalReceptor: '123',
      UsoCFDI: 'G01',
    };
    expect(receptor.validate(objetoReceptorValido)).toBe(false);
  });

  // Prueba 2: Debería rechazar un objeto de Receptor con valores vacíos
  it('Debería rechazar un objeto de Receptor con valores vacíos', () => {
    const objetoReceptorVacio = {
      Rfc: '',
      Nombre: '',
      DomicilioFiscalReceptor: '',
      RegimenFiscalReceptor: '',
      UsoCFDI: '',
    };

    expect(receptor.validate(objetoReceptorVacio)).toBe(false);
  });

  // Prueba 3: Debería rechazar un objeto de Receptor con un RFC inválido
  it('Debería rechazar un objeto de Receptor con un RFC inválido', () => {
    const objetoReceptorRfcInvalido = {
      Rfc: 'RFC_INVALIDO',
      Nombre: 'amir',
      DomicilioFiscalReceptor: '12345',
      RegimenFiscalReceptor: '123',
      UsoCFDI: 'G01',
    };

    expect(receptor.validate(objetoReceptorRfcInvalido)).toBe(false);
  });

  // Prueba 4: Debería rechazar un objeto de Receptor con un código postal incorrecto
  it('Debería rechazar un objeto de Receptor con un código postal incorrecto', () => {
    const objetoReceptorCodigoPostalInvalido = {
      Rfc: 'LAN7008173R59',
      Nombre: 'amir',
      DomicilioFiscalReceptor: '1234', // No cumple con el patrón de 5 dígitos
      RegimenFiscalReceptor: '123',
      UsoCFDI: 'G01',
    };

    expect(receptor.validate(objetoReceptorCodigoPostalInvalido)).toBe(false);
  });

  // Prueba 5: Debería validar un objeto de Receptor con atributo condicional (NumRegIdTrib)
  it('Debería validar un objeto de Receptor con atributo condicional (NumRegIdTrib)', () => {
    const objetoReceptorConAtributoCondicional = {
      Rfc: 'LAN7008173R59',
      Nombre: 'amir',
      DomicilioFiscalReceptor: '12345',
      RegimenFiscalReceptor: '601',
      UsoCFDI: 'G01',
      NumRegIdTrib: '1234567890',
    };

    expect(receptor.validate(objetoReceptorConAtributoCondicional)).toBe(true);
  });

  // Prueba 6: Debería rechazar un objeto de Receptor con atributo condicional inválido (NumRegIdTrib)
  it('Debería rechazar un objeto de Receptor con atributo condicional inválido (NumRegIdTrib)', () => {
    const objetoReceptorConAtributoCondicionalInvalido = {
      Rfc: 'LAN7008173R59',
      Nombre: 'amir',
      DomicilioFiscalReceptor: '12345',
      RegimenFiscalReceptor: '123',
      UsoCFDI: 'G01',
      NumRegIdTrib: 'ABC', // No cumple con el patrón
    };

    expect(
      receptor.validate(objetoReceptorConAtributoCondicionalInvalido)
    ).toBe(false);
  });

  // Agrega más pruebas según sea necesario para cubrir otros casos de uso o escenarios del esquema del Receptor
});
