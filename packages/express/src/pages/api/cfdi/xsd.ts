import {
  CFDI,
  CFDIAttributes,
  Concepts,
  Emisor,
  Impuestos,
  ObjetoImpEnum,
  Receptor,
  Relacionado,
} from '@cfdi/xml';
import { NextApiRequest, NextApiResponse } from 'next';

import CfdiSchema from '@cfdi/schema';
import TransformXsd from '@cfdi/xsd';
import { XmlIeduAttribute } from '@cfdi/complementos';
import { getFactura } from '../../../comprobantes';
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
    const comprobanteXsd = CfdiSchema.of();
    const patch =
      '/Users/amir/Documents/proyectos/amir/cfdi/packages/cfdi/schema/src/files/';
    comprobanteXsd.setConfig({
      xsd: {
        cfdi: `${patch}cfdv40.xsd`,
        catalogos: `${patch}catCFDI.xsd`,
        tipoDatos: `${patch}tdCFDI.xsd`,
      },
    });
    const xsd = await comprobanteXsd.processAll();
    await comprobanteXsd.save(`${patch}schema/`);
    res.send({
      xsd,
      mio,
      saxon,
      //xml: json,
    });
  }
}
