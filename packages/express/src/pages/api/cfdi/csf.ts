import { NextApiRequest, NextApiResponse } from 'next';

import csf from '@cfdi/csf';
import path from 'path';

export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const constancia = path.join(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    '..',
    '..',
    'files',
    'pdf',
    'csf.pdf'
  );

  const pdfData = await csf(constancia);
  res.send({
    text: pdfData,
  });
}
