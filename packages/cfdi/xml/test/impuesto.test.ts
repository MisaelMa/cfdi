import { describe, it, expect, vi } from 'vitest';
import { Impuestos } from '../src/tags/Impuestos';
import { Schema } from '@cfdi/xsd';
import {
  XmlImpuestosTrasladados,
  XmlTranRentAttributesProperties,
} from '../src/types';

describe('Impuestos', () => {
  it('debería crear una instancia de Impuestos con los atributos dados', () => {
    const totalImpuestos: XmlImpuestosTrasladados = {
      TotalImpuestosTrasladados: '100.1024',
    };
    const impuestos = new Impuestos(totalImpuestos);
    expect(impuestos.getTotalImpuestos()).toEqual({
      TotalImpuestosTrasladados: 100.1024,
    });
  });

  it('debería agregar un traslado', () => {
    const totalImpuestos: XmlImpuestosTrasladados = {
      TotalImpuestosTrasladados: '100.00',
    };
    const impuestos = new Impuestos(totalImpuestos);
    const trasladoPayload: XmlTranRentAttributesProperties & {
      Base: string | number;
    } = {
      Base: '1000',
      Impuesto: '002',
      TipoFactor: 'Tasa',
      TasaOCuota: '0.160000',
      Importe: '160.00',
    };

    const validateSpy = vi.spyOn(Schema.of().cfdi.traslado, 'validate');
    impuestos.traslados(trasladoPayload);

    expect(validateSpy).toHaveBeenCalledWith({
      ...trasladoPayload,
      TasaOCuota: 0.16,
      Importe: 160,
    });

    validateSpy.mockRestore();

    expect(impuestos.getTraslados()).toEqual([
        {
          _attributes: {
            ...trasladoPayload,
            TasaOCuota: 0.16,
            Importe: 160,
          },
        },
      ]);
  });

  it('debería agregar una retención', () => {
    const totalImpuestos: XmlImpuestosTrasladados = {
      TotalImpuestosTrasladados: '100.00',
    };
    const impuestos = new Impuestos(totalImpuestos);
    const retencionPayload: Omit<
      XmlTranRentAttributesProperties,
      'Base' | 'TipoFactor' | 'TasaOCuota'
    > = {
      Impuesto: '001',
      Importe: '50.00',
    };
    const validateSpy = vi.spyOn(Schema.of().cfdi.retencion, 'validate');

    impuestos.retenciones(retencionPayload);
    expect(validateSpy).toHaveBeenCalledWith({
      ...retencionPayload,
      Importe: 50,
    });
    validateSpy.mockRestore();

    expect(impuestos.getRetenciones()).toEqual([
      {
        _attributes: {
          ...retencionPayload,
          Importe: 50,
        },
      },
    ]);
  });
});
