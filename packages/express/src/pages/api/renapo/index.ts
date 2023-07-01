import { NextApiRequest, NextApiResponse } from 'next';

import { gob } from '@cfdi/curp';
import path from 'path';

export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const curp = gob.findByCurp('MACA961017HQRRHM06');
  res.send({
    constancia: 2,
    curp,
  });
}
