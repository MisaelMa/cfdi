import Ajv, { ValidateFunction } from 'ajv';
import { NextApiRequest, NextApiResponse } from 'next';

import { LoadXsd } from '@cfdi/xsd/src/LoadXsd';
import { getFactura } from '../../../../comprobantes';

const schema = {
  $id: 'Emisor.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title:
    'This JSON Schema file was generated from Emisor on Sun Oct 08 2023 19:26:15 GMT-0500 (Eastern Standard Time).  For more information please see http://www.xsd2jsonschema.org',
  description:
    'Atributo requerido para incorporar la clave del régimen del contribuyente emisor al que aplicará el efecto fiscal de este comprobante.',
  required: ['Rfc', 'RegimenFiscal'],
  properties: {
    Rfc: {
      description:
        'Tipo definido para expresar claves del Registro Federal de Contribuyentes',
      maxLength: 13,
      minLength: 12,
      pattern:
        '[A-Z&Ñ]{3,4}[0-9]{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])[A-Z0-9]{2}[0-9A]',
      type: 'string',
    },
    Nombre: {
      type: 'string',
    },
    RegimenFiscal: {
      enum: [
        '601',
        '603',
        '605',
        '606',
        '607',
        '608',
        '609',
        '610',
        '611',
        '612',
        '614',
        '615',
        '616',
        '620',
        '621',
        '622',
        '623',
        '624',
        '625',
        '626',
        '628',
        '629',
        '630',
      ],
      type: 'string',
    },
    FacAtrAdquirente: {
      description:
        'Atributo condicional para expresar el número de operación proporcionado por el SAT cuando se trate de un comprobante a través de un PCECFDI o un PCGCFDISP.',
      maxLength: 10,
      minLength: 10,
      pattern: '[0-9]{10}',
      type: 'string',
    },
  },
  type: 'object',
  definitions: {},
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
    Rfc: 'LAN7008173R59',
    Nombre: '1',
    RegimenFiscal: '612',
  };

  const valid = ajv.validate(schema, objetoValido);
  if (!valid) console.log(ajv.errors);

  res.send({
    amir: 2,
    valid,
    erros: ajv.errors,
  });
}
