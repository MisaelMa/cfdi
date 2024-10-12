import { CfdiProcess, CfdiSchema } from '@cfdi/schema';
import { NextApiRequest, NextApiResponse } from 'next';

import { writeFileSync } from 'fs';

export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const patch =
    '/Users/amir/Documents/proyectos/amir/node/cfdi/packages/cfdi/schema/src/files/';

  const comprobanteXsd = CfdiSchema.of();
  comprobanteXsd.setConfig({
    xsd: {
      cfdi: `${patch}cfdv40.xsd`,
      catalogos: `${patch}catCFDI.xsd`,
      tipoDatos: `${patch}tdCFDI.xsd`,
      complementos: [
        {
          name: 'iedu',
          path: `${patch}complementos/iedu.xsd`,
        },
      ],
    },
  });
  const xsd = await comprobanteXsd.processAll();
  //await comprobanteXsd.save(`${patch}schema/`);

  /*   const cfdi = CfdiProcess.of();
  cfdi.setConfig({ path: `${patch}cfdv40.xsd` });
  const targetXsd = cfdi.readXsd();
  const x: any = [];

  cfdi.schemaWrap(targetXsd, x, null, 'comprobante', 'comprobante');
  const comprobante = cfdi.comprobante({ ...targetXsd });
  x.unshift({
    name: 'comprobante',
    path: 'comprobante',
    key: 'comprobante',
    folder: 'comprobante',
    xsd: comprobante,
  }); */
  // const schemaXsd = cfdi.generateSchemas(schemaWrap);

  /*   x.forEach((schema: any) => {
    const name = schema.name.toLowerCase();

    writeFileSync(
      '/Users/amir/Documents/proyectos/amir/cfdi/packages/cfdi/schema/src/files/xsd/' +
        name +
        '.xsd',
      cfdi.toXsd(schema.xsd)
    );
  }); */

  res.send({
    xsd,
    // process: await cfdi.process(),
    //xml: json,
  });
}
