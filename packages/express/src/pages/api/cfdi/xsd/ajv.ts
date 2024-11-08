import { NextApiRequest, NextApiResponse } from 'next';
import { Schema, Transform } from '@cfdi/xsd';

import { AnyValidateFunction } from 'ajv/dist/types';
import { getFactura } from '../../../../comprobantes';

export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const validate = Schema.of();
  validate.setConfig({
    path: '/Users/amir/Documents/proyectos/amir/cfdi/packages/cfdi/schema/src/files/schema',
  });
  const emisor = validate.cfdi.emisor;
  // Objeto a validar (en este caso, un objeto válido según el esquema)
  const objetoValido = {
    Rfc: '',
    Nombre: '',
    RegimenFiscal: '',
  };

  const valid = emisor(objetoValido);

  res.send({
    emisor,
    amir: 2,
    valid,
    erros: emisor.errors,
  });
}
