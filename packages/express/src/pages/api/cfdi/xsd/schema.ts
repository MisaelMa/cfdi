import { NextApiRequest, NextApiResponse } from 'next';

import CfdiSchema from '@cfdi/schema';

export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const comprobanteXsd = CfdiSchema.of();
  const patch =
    '/Users/amir/Documents/proyectos/amir/cfdi/packages/cfdi/schema/src/files/';
  comprobanteXsd.setConfig({
    xsd: {
      cfdi: `${patch}cfdv40.xsd`,
      catalogos: `${patch}catCFDI.xsd`,
      tipoDatos: `${patch}tdCFDI.xsd`,
      complementos: [],
    },
  });
  const xsd = await comprobanteXsd.processAll();
  await comprobanteXsd.save(`${patch}schema/`);
  res.send({
    xsd,
    //xml: json,
  });
}
