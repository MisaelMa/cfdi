import { NextApiRequest, NextApiResponse } from 'next';

import CfdiSchema from '@cfdi/schema';
import TransformXsd from '@cfdi/xsd';
import { getFactura } from '../../../../comprobantes';
import path from 'path';

export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cfd = await getFactura('general');
  const saxon = await cfd.cadenaOriginal;
  const json = await cfd.getJsonCdfi();
  const xml = await cfd.getXmlCdfi();

  const trs = new TransformXsd(json);
  const mio = await trs.run();
  // const download = Buffer.from(await Receip.getBase64(), 'base64');
  // res.contentType('application/pdf');
  if (req.query.xml) {
    res.setHeader('Content-Type', 'text/xml');
    // console.log(xml)
    //res.send(xml);
  } else {
    res.send({
      mio,
      saxon,
      //xml: json,
    });
  }
}
