import { Module } from '@nestjs/common';

import { CsdController } from './controllers/csd/csd.controller';
import { XmlController } from './controllers/xml/xml.controller';
import { PdfController } from './pdf/pdf.controller';

/**
 *
 */
@Module({
  controllers: [CsdController, XmlController, PdfController],
})
export class CfdiModule { }
