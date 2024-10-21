import { describe, it, expect } from 'vitest';
import { Relacionado } from '../src/tags/Relacionado';
import { XmlRelacionadosAttributes } from '../src/types';

describe('Relacionado', () => {
  it('debería crear una instancia de Relacionado con los atributos dados', () => {
    const typeRelation: XmlRelacionadosAttributes = {
      TipoRelacion: '01',
    };
    const relacionado = new Relacionado(typeRelation);
    expect(relacionado.getRelation()._attributes).toEqual(typeRelation);
  });

  it('debería agregar una relación', () => {
    const typeRelation: XmlRelacionadosAttributes = {
      TipoRelacion: '01',
    };
    const relacionado = new Relacionado(typeRelation);
    relacionado.addRelation('123e4567-e89b-12d3-a456-426614174000');
    relacionado.addRelation('123e4567-e89b-12d3-a456-426614174001');

    expect(relacionado.getRelation()['cfdi:CfdiRelacionado']).toEqual([
      { _attributes: { UUID: '123e4567-e89b-12d3-a456-426614174000' } },
      { _attributes: { UUID: '123e4567-e89b-12d3-a456-426614174001' } },
    ]);
  });

  it('debería convertir a JSON', () => {
    const typeRelation: XmlRelacionadosAttributes = {
      TipoRelacion: '01',
    };
    const relacionado = new Relacionado(typeRelation);
    expect(relacionado.toJson()).toEqual({
      _attributes: typeRelation,
    });
  });
});
