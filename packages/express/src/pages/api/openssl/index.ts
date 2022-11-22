import { NextApiRequest, NextApiResponse } from 'next';

import { B111 } from '@cfdi/pdf';
import path from 'path';
import { pkcs8 } from '@clir/openssl/src';

export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cli = pkcs8
    .inform('DER')
    .in('file')
    .outform('PEM')
    .passin(`pass:${'1234567a'}`);
  res.json({
    cli: cli.cli(),
  });
}
