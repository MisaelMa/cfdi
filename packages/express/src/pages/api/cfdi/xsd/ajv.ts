import { NextApiRequest, NextApiResponse } from 'next';
import { LoadXsd } from '@cfdi/xsd/src/LoadXsd';
import { getFactura } from '../../../../comprobantes';
import Ajv, { ValidateFunction } from 'ajv';

const emi = {
  $id: 'Emisor.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title:
    'This JSON Schema file was generated from Emisor on Wed Sep 27 2023 15:38:26 GMT-0500 (Eastern Standard Time).  For more information please see http://www.xsd2jsonschema.org',
  description:
    "Schema tag attributes: xmlns:cfdi='http://www.sat.gob.mx/cfd/4' xmlns:xs='http://www.w3.org/2001/XMLSchema' xmlns:catCFDI='http://www.sat.gob.mx/sitio_internet/cfd/catalogos' xmlns:tdCFDI='http://www.sat.gob.mx/sitio_internet/cfd/tipoDatos/tdCFDI' targetNamespace='http://www.sat.gob.mx/cfd/4' elementFormDefault='qualified' attributeFormDefault='unqualified'",
  type: 'object',
  definitions: {
    Emisor: {
      description:
        'Atributo requerido para incorporar la clave del régimen del contribuyente emisor al que aplicará el efecto fiscal de este comprobante.',
      required: ['@Rfc', '@Nombre', '@RegimenFiscal'],
      properties: {
        '@Rfc': {
          $ref: 'tipoDatos.json#/definitions/t_RFC',
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
          $ref: 'catalogos.json#/definitions/c_RegimenFiscal',
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
  xsd.setConfig({
    path: '/home/dev/Documents/amir/cfdi/packages/cfdi/schema/src/files/schema',
  });
  const emisor = xsd.getAjv().getSchema('Emisor.json');

  const Ajv = require('ajv');
  const ajv = new Ajv();

  // Agregar el esquema a Ajv
  ajv.addSchema(emi);

  // Objeto a validar (en este caso, un objeto válido según el esquema)
  const objetoValido = {
    '@Rfc': 'EJEMPLO123',
    '@Nombre': 'Empresa Ejemplo',
    '@RegimenFiscal': 'RegimenEjemplo',
  };

  // Objeto inválido (no cumple con las restricciones del esquema)
  const objetoInvalido = {
    name: 'ss',
    // ... (propiedades faltantes o incorrectas aquí)
  };

  // Validar el objeto válido
  const validate = ajv.getSchema('Emisor.json');
  const esValido = validate(objetoInvalido);

  if (esValido) {
    console.log('El objeto es válido según el esquema.');
  } else {
    console.log(
      'El objeto no cumple con el esquema. Errores:',
      validate.errors
    );
  }

  res.send({
    amir: 2,
  });
}
