import { NextApiRequest, NextApiResponse } from 'next';

import { B111 } from '@cfdi/pdf';
import path from 'path';

export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const nameFile = '5E2D6AFF-2DD7-43D1-83D3-14C1ACA396D9.xml';
  // const nameFile = 'amir.xml';
  const xml = path.join(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    '..',
    '..',
    'files',
    'xml'
  );

  // const logo = readFileSync(path.join(__filename, '../', 'logo.png'))
  const pdf = new B111(`${xml}/${nameFile}`, {
    lugarExpedicion:
      'CARRETERA FEDERAL CANCUN TULUM KM 292 MANZANA 24 LOTE 24 FRACCION 4 EJIDO PLAYA',
    // logo: {
    //     width: 100,
    //     height: 100,
    //     image: `data:image/png;base64, ${logo.toString('base64')}`
    // }
  });
  // await pdf.save('/home/misael/Documents/proyectos/amir')
  const download = Buffer.from(await pdf.getBase64(), 'base64');
  res.setHeader('Content-Type', 'application/pdf');
  res.send(download);
}
