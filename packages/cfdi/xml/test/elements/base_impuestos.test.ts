import { describe, it, expect, vi } from 'vitest';
import { BaseImpuestos } from '../../src/elements/BaseImpuestos';
import {
  XmlImpuestosTrasladados,
  XmlTranRentAttributesProperties,
  XmlRetencionAttributes,
  XmlTransladoAttributes,
} from '../../src/types';
import { Schema } from '@cfdi/xsd';
import { stringObjToNumerico } from '../../src/utils/number.utils';

/* vi.mock('@cfdi/xsd', () => ({
  Schema: {
    of: () => ({
      cfdi: {
        impuestos: {
          validate: vi.fn(),
        },
      },
    }),
  },
})); */

vi.mock('../utils/number.utils', () => ({
  stringObjToNumerico: vi.fn((obj) => obj),
}));

describe('BaseImpuestos', () => {
  it('debería crear una instancia de BaseImpuestos con los atributos dados', () => {
    const validateSpy = vi.spyOn(Schema.of().cfdi.impuestos, 'validate');

    const totalImpuestos: XmlImpuestosTrasladados = {
      TotalImpuestosTrasladados: '100.00',
    };
    const baseImpuestos = new BaseImpuestos(totalImpuestos);
    expect(baseImpuestos.getTotalImpuestos()).toEqual({
        TotalImpuestosTrasladados: '100.00',
    });

    expect(validateSpy).toHaveBeenCalledWith({
        TotalImpuestosTrasladados: '100.00',
      });
  
      validateSpy.mockRestore();
  
  });

  it('debería agregar un traslado', () => {
    const totalImpuestos: XmlImpuestosTrasladados = {
      TotalImpuestosTrasladados: '100.00',
    };
    const baseImpuestos = new BaseImpuestos(totalImpuestos);
    const trasladoPayload: XmlTranRentAttributesProperties & { Base: string | number } = {
      Base: '1000',
      Impuesto: '002',
      TipoFactor: 'Tasa',
      TasaOCuota: '0.160000',
      Importe: '160.00',
    };
    baseImpuestos.setTraslado(trasladoPayload);
    expect(baseImpuestos.getTraslados()).toContainEqual({
      _attributes: trasladoPayload,
    });
  });

  it('debería agregar una retención', () => {
    const totalImpuestos: XmlImpuestosTrasladados = {
      TotalImpuestosTrasladados: '100.00',
    };
    const baseImpuestos = new BaseImpuestos(totalImpuestos);
    const retencionPayload: Omit<XmlTranRentAttributesProperties, 'Base' | 'TipoFactor' | 'TasaOCuota'> = {
      Impuesto: '001',
      Importe: '50.00',
    };
    baseImpuestos.setRetencion(retencionPayload);
    expect(baseImpuestos.getRetenciones()).toContainEqual({
      _attributes: retencionPayload,
    });
  });

  it('debería retornar los impuestos totales', () => {
    const totalImpuestos: XmlImpuestosTrasladados = {
      TotalImpuestosTrasladados: '100.00',
    };
    const baseImpuestos = new BaseImpuestos(totalImpuestos);
    expect(baseImpuestos.getTotalImpuestos()).toEqual({
        TotalImpuestosTrasladados: '100.00'
    });
  });

  it('debería retornar las retenciones', () => {
    const totalImpuestos: XmlImpuestosTrasladados = {
      TotalImpuestosTrasladados: '100.00',
    };
    const baseImpuestos = new BaseImpuestos(totalImpuestos);
    const retencionPayload: Omit<XmlTranRentAttributesProperties, 'Base' | 'TipoFactor' | 'TasaOCuota'> = {
      Impuesto: '001',
      Importe: '50.00',
    };
    baseImpuestos.setRetencion(retencionPayload);
    expect(baseImpuestos.getRetenciones()).toContainEqual({
      _attributes: retencionPayload,
    });
  });

  it('debería retornar los traslados', () => {
    const totalImpuestos: XmlImpuestosTrasladados = {
      TotalImpuestosTrasladados: '100.00',
    };
    const baseImpuestos = new BaseImpuestos(totalImpuestos);
    const trasladoPayload: XmlTranRentAttributesProperties & { Base: string | number } = {
      Base: '1000',
      Impuesto: '002',
      TipoFactor: 'Tasa',
      TasaOCuota: '0.160000',
      Importe: '160.00',
    };
    baseImpuestos.setTraslado(trasladoPayload);
    expect(baseImpuestos.getTraslados()).toContainEqual({
      _attributes: trasladoPayload,
    });
  });
});