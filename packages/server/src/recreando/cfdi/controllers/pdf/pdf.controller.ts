import { Controller, Res, Get } from '@nestjs/common';
import { Response } from 'express';
import { A117 } from "@cfdi/pdf"
//import { readFileSync } from 'fs';
import * as path from 'path';
// import { PDF, XmlToJson } from '../src';
@Controller('cfdi/pdf')
export class PdfController {

  @Get('/')
  async index(@Res() res: Response) {
    // const nameFile = '5E2D6AFF-2DD7-43D1-83D3-14C1ACA396D9.xml'
    const nameFile = 'amir.xml'
    const xml = path.join(__dirname, '..', '..', '..', '..', '..', '..', 'files', 'xml',)

    // const xml = path.join(__filename, '../', '5E2D6AFF-2DD7-43D1-83D3-14C1ACA396D9.xml')
    // const logo = readFileSync(path.join(__filename, '../', 'logo.png'))
    const pdf = new A117(`${xml}/${nameFile}`, {
      lugarExpedicion: 'CARRETERA FEDERAL CANCUN TULUM KM 292 MANZANA 24 LOTE 24 FRACCION 4 EJIDO PLAYA',
      // logo: {
      //     width: 100,
      //     height: 100,
      //     image: `data:image/png;base64, ${logo.toString('base64')}`
      // }
    })
    // const pdf = new A117(xml);
    // await pdf.save('/home/misael/Documents/proyectos/amir')
    const download = Buffer.from(await pdf.getBase64(), 'base64');
    res.contentType('application/pdf');
    res.send(download);
  }
}
