import { describe, it, expect, vi } from 'vitest';
import { Comprobante } from '../../src/elements/Comprobante';
import { Emisor } from '../../src/elements/Emisor';
import { Receptor } from '../../src/elements/Receptor';
import { Concepto } from '../../src/elements/Concepto';
import { Impuestos } from '../../src/elements/Impuestos';
import { Relacionado } from '../../src/elements/Relacionado';
import { ComlementType } from '@cfdi/complementos';
import { Schema } from '@cfdi/xsd';
import { ObjetoImpEnum } from '../../src/types';


describe('Comprobante', () => {
  it('debería crear una instancia de Comprobante con los atributos dados', () => {
    const comprobante = new Comprobante();
    expect(comprobante).toBeInstanceOf(Comprobante);
  });

  it('debería establecer los atributos XML', () => {
    const comprobante = new Comprobante();
    comprobante.setAttributesXml({ version: '1.1', encoding: 'ISO-8859-1' });
    expect(comprobante.xml._declaration._attributes).toEqual({
      version: '1.1',
      encoding: 'ISO-8859-1',
    });
  });

  it('debería establecer los atributos del comprobante', () => {
    const comprobante = new Comprobante();
    const attributes = {
      xmlns: { cfdi: 'http://www.sat.gob.mx/cfd/4', xsi: 'http://www.w3.org/2001/XMLSchema-instance' },
      schemaLocation: ['http://www.sat.gob.mx/cfd/4', 'http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd'],
    };
    comprobante.setAttributes(attributes);
    expect(comprobante.xml['cfdi:Comprobante']._attributes).toMatchObject({
      'xmlns:cfdi': 'http://www.sat.gob.mx/cfd/4',
      'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
      'xsi:schemaLocation': 'http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd',
    });
  });

  it('debería agregar información global', () => {
    const comprobante = new Comprobante();
    const payload = {
      Periodicidad: '01',
      Meses: '01',
      Año: 2023,
    };
    comprobante.informacionGlobal(payload);
    expect(comprobante.xml['cfdi:Comprobante']['cfdi:InformacionGlobal']._attributes).toEqual(payload);
  });

  it('debería agregar relacionados', () => {
    const comprobante = new Comprobante();
    const relacionado = new Relacionado({ TipoRelacion: '01' });
    comprobante.relacionados(relacionado);
    expect(comprobante.xml['cfdi:Comprobante']['cfdi:CfdiRelacionados']).toEqual(relacionado.getRelation());
  });

  it('debería agregar emisor', () => {
    const comprobante = new Comprobante();
    const emisor = new Emisor({ Rfc: 'XAXX010101000', Nombre: 'Empresa Ejemplo', RegimenFiscal: '601' });
    comprobante.emisor(emisor);
    expect(comprobante.xml['cfdi:Comprobante']['cfdi:Emisor']).toEqual(emisor.emisor);
  });

  it('debería agregar receptor', () => {
    const comprobante = new Comprobante();
    const receptor = new Receptor({ Rfc: 'XAXX010101000', Nombre: 'Receptor Ejemplo', UsoCFDI: 'G03' });
    comprobante.receptor(receptor);
    expect(comprobante.xml['cfdi:Comprobante']['cfdi:Receptor']).toEqual(receptor.receptor);
  });

  it('debería agregar concepto', () => {
    const comprobante = new Comprobante();
    const concepto = new Concepto({
      ClaveProdServ: '01010101',
      NoIdentificacion: '12345',
      Cantidad: '1',
      ClaveUnidad: 'H87',
      Unidad: 'Pieza',
      Descripcion: 'Producto de prueba',
      ValorUnitario: '100.00',
      Importe: '100.00',
      ObjetoImp: ObjetoImpEnum.NoobjetoDeimpuesto
    });
    comprobante.concepto(concepto);
  
    expect(comprobante.xml['cfdi:Comprobante']['cfdi:Conceptos']['cfdi:Concepto']).toEqual([
       {
        "_attributes":  {
          "Cantidad": 1,
          "ClaveProdServ": "01010101",
          "ClaveUnidad": "H87",
          "Descripcion": "Producto de prueba",
          "Importe": 100,
          "NoIdentificacion": "12345",
          "ObjetoImp": "01",
          "Unidad": "Pieza",
          "ValorUnitario": 100,
        },
      },
    ]);
  });
 
  it('debería agregar impuestos', () => {
    const comprobante = new Comprobante();
    const impuestos = new Impuestos({ TotalImpuestosTrasladados: '100.00' });
    comprobante.impuesto(impuestos);
    expect(comprobante.xml['cfdi:Comprobante']['cfdi:Impuestos']).toEqual(impuestos.impuesto);
  });

   it('debería agregar complemento', async () => {
    const comprobante = new Comprobante();
    const complementoMock: ComlementType = {
      getComplement: async () => ({
        complement: {},
        key: 'testKey',
        schemaLocation: ['http://example.com/schema'],
        xmlns: 'http://example.com/xmlns',
        xmlnskey: 'testXmlnsKey',
      }),
    };
    await comprobante.complemento(complementoMock);
    expect(comprobante.xml['cfdi:Comprobante']['cfdi:Complemento']['testKey']).toEqual({});
  });
});