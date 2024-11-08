import { describe, it, expect } from 'vitest';
import { Emisor } from '../../src/elements/Emisor';
import {  XmlEmisorAttribute } from '../../src/types'
import { Schema } from '@cfdi/xsd/src'

describe('Emisor', () => {
  it('debería crear una instancia de Emisor con los atributos dados', () => {
    const emisorAttributes: XmlEmisorAttribute = {
      Rfc: 'XAXX010101000',
      Nombre: 'Empresa Ejemplo',
      RegimenFiscal: '601',
    };
    const emisor = new Emisor(emisorAttributes);
    expect(emisor.emisor._attributes).toEqual(emisorAttributes);
  });

  it('debería establecer el RFC', () => {
    const emisorAttributes: XmlEmisorAttribute = {
      Rfc: 'XAXX010101000',
      Nombre: 'Empresa Ejemplo',
      RegimenFiscal: '601',
    };
    const emisor = new Emisor(emisorAttributes);
    emisor.setRfc('XEXX010101000');
    expect(emisor.emisor._attributes.Rfc).toBe('XEXX010101000');
  });

  it('debería establecer el Nombre', () => {
    const emisorAttributes: XmlEmisorAttribute = {
      Rfc: 'XAXX010101000',
      Nombre: 'Empresa Ejemplo',
      RegimenFiscal: '601',
    };
    const emisor = new Emisor(emisorAttributes);
    emisor.setNombre('Nueva Empresa');
    expect(emisor.emisor._attributes.Nombre).toBe('Nueva Empresa');
  });

  it('debería establecer el Régimen Fiscal', () => {
    const emisorAttributes: XmlEmisorAttribute = {
      Rfc: 'XAXX010101000',
      Nombre: 'Empresa Ejemplo',
      RegimenFiscal: '601',
    };
    const emisor = new Emisor(emisorAttributes);
    emisor.setRegimenFiscal('603');
    expect(emisor.emisor._attributes.RegimenFiscal).toBe('603');
  });

  it('debería establecer el FacAtrAdquirente', () => {
    const emisorAttributes: XmlEmisorAttribute = {
      Rfc: 'XAXX010101000',
      Nombre: 'Empresa Ejemplo',
      RegimenFiscal: '601',
    };
    const emisor = new Emisor(emisorAttributes);
    emisor.setFacAtrAdquirente('123456');
    expect(emisor.emisor._attributes.FacAtrAdquirente).toBe('123456');
  });

  it('debería convertir a JSON', () => {
    const emisorAttributes: XmlEmisorAttribute = {
      Rfc: 'XAXX010101000',
      Nombre: 'Empresa Ejemplo',
      RegimenFiscal: '601',
    };
    const emisor = new Emisor(emisorAttributes);
    expect(emisor.toJson()).toEqual({
      _attributes: emisorAttributes,
    });
  });
});