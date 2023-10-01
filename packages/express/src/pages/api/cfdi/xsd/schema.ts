import { CfdiProcess, CfdiSchema } from '@cfdi/schema';
import { NextApiRequest, NextApiResponse } from 'next';

import { writeFileSync } from 'fs';

export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const patch =
    '/Users/amir/Documents/proyectos/amir/cfdi/packages/cfdi/schema/src/files/';

  const comprobanteXsd = CfdiSchema.of();
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

  const cfdi = CfdiProcess.of();
  cfdi.setConfig({ path: `${patch}cfdv40.xsd` });
  const targetXsd = cfdi.readXsd();

  const schemaWrap = cfdi.schemaWrap(targetXsd);
  const schemaXsd = cfdi.generateSchemas(schemaWrap);

  schemaWrap.forEach(schema => {
    const name = schema.name.toLowerCase();

    writeFileSync(
      '/Users/amir/Documents/proyectos/amir/cfdi/packages/cfdi/schema/src/files/xsd/' +
        name +
        '.xsd',
      schema.xsd
    );
  });

  res.send({
    schemaWrap,
    process: await cfdi.process(),
    //xml: json,
  });
}
