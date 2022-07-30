import { Module } from '@nestjs/common';

import { CsdController } from './controllers/csd/csd.controller';
import { XmlController } from './controllers/xml/xml.controller';

/**
 *
 */
@Module({
  controllers: [CsdController, XmlController],
})
export class CfdiModule { }
