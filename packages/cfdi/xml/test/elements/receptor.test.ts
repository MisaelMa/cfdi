import { describe, it, expect } from 'vitest';
import { Receptor } from '../../src/elements/Receptor';
import { XmlReceptorAttribute } from '../../src/types';

describe('Receptor', () => {
  it('debería crear una instancia de Receptor con los atributos dados', () => {
    const receptorAttributes: XmlReceptorAttribute = {
      Rfc: 'XAXX010101000',
      Nombre: 'Receptor Ejemplo',
      UsoCFDI: 'G03',
      DomicilioFiscalReceptor: '12345',
      RegimenFiscalReceptor: '601',
    };
    const receptor = new Receptor(receptorAttributes);
    expect(receptor.receptor._attributes).toEqual(receptorAttributes);
  });

  it('debería establecer el RFC', () => {
    const receptorAttributes: XmlReceptorAttribute = {
      Rfc: 'XAXX010101000',
      Nombre: 'Receptor Ejemplo',
      UsoCFDI: 'G03',
      DomicilioFiscalReceptor: '12345',
      RegimenFiscalReceptor: '601',
    };
    const receptor = new Receptor(receptorAttributes);
    receptor.setRFC('XEXX010101000');
    expect(receptor.receptor._attributes.Rfc).toBe('XEXX010101000');
  });

  it('debería establecer el Nombre', () => {
    const receptorAttributes: XmlReceptorAttribute = {
      Rfc: 'XAXX010101000',
      Nombre: 'Receptor Ejemplo',
      UsoCFDI: 'G03',
      DomicilioFiscalReceptor: '12345',
      RegimenFiscalReceptor: '601',
    };
    const receptor = new Receptor(receptorAttributes);
    receptor.setNombre('Nuevo Receptor');
    expect(receptor.receptor._attributes.Nombre).toBe('Nuevo Receptor');
  });

  it('debería establecer el UsoCFDI', () => {
    const receptorAttributes: XmlReceptorAttribute = {
      Rfc: 'XAXX010101000',
      Nombre: 'Receptor Ejemplo',
      UsoCFDI: 'G03',
      DomicilioFiscalReceptor: '12345',
      RegimenFiscalReceptor: '601',
    };
    const receptor = new Receptor(receptorAttributes);
    receptor.setUsoCFDI('P01');
    expect(receptor.receptor._attributes.UsoCFDI).toBe('P01');
  });

  it('debería establecer el Domicilio Fiscal del Receptor', () => {
    const receptorAttributes: XmlReceptorAttribute = {
      Rfc: 'XAXX010101000',
      Nombre: 'Receptor Ejemplo',
      UsoCFDI: 'G03',
      DomicilioFiscalReceptor: '12345',
      RegimenFiscalReceptor: '601',
    };
    const receptor = new Receptor(receptorAttributes);
    receptor.setDomicilioFiscalReceptor('67890');
    expect(receptor.receptor._attributes.DomicilioFiscalReceptor).toBe('67890');
  });

  it('debería establecer la Residencia Fiscal', () => {
    const receptorAttributes: XmlReceptorAttribute = {
      Rfc: 'XAXX010101000',
      Nombre: 'Receptor Ejemplo',
      UsoCFDI: 'G03',
      DomicilioFiscalReceptor: '12345',
      RegimenFiscalReceptor: '601',
    };
    const receptor = new Receptor(receptorAttributes);
    receptor.setResidenciaFiscal('USA');
    expect(receptor.receptor._attributes.ResidenciaFiscal).toBe('USA');
  });

  it('debería establecer el Número de Registro de Identificación Tributaria', () => {
    const receptorAttributes: XmlReceptorAttribute = {
      Rfc: 'XAXX010101000',
      Nombre: 'Receptor Ejemplo',
      UsoCFDI: 'G03',
      DomicilioFiscalReceptor: '12345',
      RegimenFiscalReceptor: '601',
    };
    const receptor = new Receptor(receptorAttributes);
    receptor.setNumRegIdTrib('123456789');
    expect(receptor.receptor._attributes.NumRegIdTrib).toBe('123456789');
  });

  it('debería establecer el Régimen Fiscal del Receptor', () => {
    const receptorAttributes: XmlReceptorAttribute = {
      Rfc: 'XAXX010101000',
      Nombre: 'Receptor Ejemplo',
      UsoCFDI: 'G03',
      DomicilioFiscalReceptor: '12345',
      RegimenFiscalReceptor: '601',
    };
    const receptor = new Receptor(receptorAttributes);
    receptor.setRegimenFiscalReceptor('603');
    expect(receptor.receptor._attributes.RegimenFiscalReceptor).toBe('603');
  });

  it('debería convertir a JSON', () => {
    const receptorAttributes: XmlReceptorAttribute = {
      Rfc: 'XAXX010101000',
      Nombre: 'Receptor Ejemplo',
      UsoCFDI: 'G03',
      DomicilioFiscalReceptor: '12345',
      RegimenFiscalReceptor: '601',
    };
    const receptor = new Receptor(receptorAttributes);
    expect(receptor.toJson()).toEqual({
      _attributes: receptorAttributes,
    });
  });
});