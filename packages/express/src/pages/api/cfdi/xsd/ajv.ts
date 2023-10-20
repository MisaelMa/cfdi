import { NextApiRequest, NextApiResponse } from 'next';
import { Schema, Transform } from '@cfdi/xsd';

import { AnyValidateFunction } from 'ajv/dist/types';
import { getFactura } from '../../../../comprobantes';

export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const schema = Schema.of();
  schema.setConfig({
    path: '/Users/amir/Documents/proyectos/amir/cfdi/packages/cfdi/schema/src/files/schema',
  });
  const emisor = schema
    .getAjv()
    .getSchema('COMPROBANTE_EMISOR') as AnyValidateFunction;

  // Objeto a validar (en este caso, un objeto válido según el esquema)
  const objetoValido = {
    Rfc: 'LAN7008173R59',
    Nombre: 'amir',
    RegimenFiscal: '617',
  };

  const valid =
    emisor.schemaEnv.validate && emisor.schemaEnv.validate(objetoValido);
  console.log(emisor.errors);
  res.send({
    emisor,
    amir: 2,
    valid,
    erros: emisor.errors,
  });
}
