import { Module } from '@nestjs/common';

import { CfdiController } from './cfdi.controller';
import { CsdController } from './controllers/csd/csd.controller';
import { XmlController } from './controllers/xml/xml.controller';

/**
 *
 */
@Module({
  controllers: [CfdiController, CsdController, XmlController],
})
export class CfdiModule { }
