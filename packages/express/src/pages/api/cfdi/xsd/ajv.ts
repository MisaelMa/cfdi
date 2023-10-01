import Ajv, { ValidateFunction } from 'ajv';
import { NextApiRequest, NextApiResponse } from 'next';

import { LoadXsd } from '@cfdi/xsd/src/LoadXsd';
import { getFactura } from '../../../../comprobantes';

const emi = {
  $id: 'Emisor.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title:
    'This JSON Schema file was generated from Emisor on Sat Sep 30 2023 20:15:48 GMT-0500 (Eastern Standard Time).  For more information please see http://www.xsd2jsonschema.org',
  description:
    "Schema tag attributes: xmlns:cfdi='http://www.sat.gob.mx/cfd/4' xmlns:xs='http://www.w3.org/2001/XMLSchema' xmlns:catCFDI='http://www.sat.gob.mx/sitio_internet/cfd/catalogos' xmlns:tdCFDI='http://www.sat.gob.mx/sitio_internet/cfd/tipoDatos/tdCFDI' targetNamespace='http://www.sat.gob.mx/cfd/4' elementFormDefault='qualified' attributeFormDefault='unqualified'",
  properties: {
    Emisor: {
      $ref: '#/definitions/Emisor',
    },
  },
  type: 'object',
  anyOf: [
    {
      required: ['Emisor'],
    },
  ],
  definitions: {
    Emisor: {
      description:
        'Atributo requerido para incorporar la clave del régimen del contribuyente emisor al que aplicará el efecto fiscal de este comprobante.',
      required: ['@Rfc', '@Nombre', '@RegimenFiscal'],
      properties: {
        '@Rfc': {
          type: 'string',
        },
        '@Nombre': {
          description:
            'Atributo requerido para registrar el nombre, denominación o razón social del contribuyente inscrito en el RFC, del emisor del comprobante.',
          maxLength: 300,
          minLength: 1,
          pattern: '[^|]{1,300}',
          type: 'string',
        },
        '@RegimenFiscal': {
          type: 'string',
        },
        '@FacAtrAdquirente': {
          description:
            'Atributo condicional para expresar el número de operación proporcionado por el SAT cuando se trate de un comprobante a través de un PCECFDI o un PCGCFDISP.',
          maxLength: 10,
          minLength: 10,
          pattern: '[0-9]{10}',
          type: 'string',
        },
      },
      type: 'object',
    },
  },
};
export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const xsd = LoadXsd.of();
  /*  xsd.setConfig({
    path: '/Users/amir/Documents/proyectos/amir/cfdi/packages/cfdi/schema/src/files/schema/',
  }); */
  /* const emisor = xsd.getAjv().getSchema('Emisor.json');
  const valida = xsd.getAjv().compile(emi); */
  const ajv = new Ajv();

  // Objeto a validar (en este caso, un objeto válido según el esquema)
  const objetoValido = {
    Emisor: {
      '@Rfc': '',
      '@FacAtrAdquirente': 's',
      '@Nombre': 'Empresa Ejemplo',
      '@RegimenFiscal': 'RegimenEjemplo',
    },
  };

  const valid = ajv.validate(emi, objetoValido);
  if (!valid) console.log(ajv.errors);

  res.send({
    amir: 2,
    valid,
    erros: ajv.errors,
  });
}
