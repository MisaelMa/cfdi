import { Controller, Res, Get } from '@nestjs/common';
import { Response } from 'express';
import { B111 } from '@cfdi/pdf/src/index';
import { readFileSync } from 'fs';


import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// import { PDF, XmlToJson } from '../src';
@Controller('cfdi/pdf')
export class PdfController {
  @Get('/')
  async index(@Res() res: Response) {
    const nameFile = '5E2D6AFF-2DD7-43D1-83D3-14C1ACA396D9.xml';
    // const nameFile = 'amir.xml';
    const xml = path.join(__dirname, '..', '..', '..', '..', '..', '..', 'files', 'xml');

    // const logo = readFileSync(path.join(__filename, '../', 'logo.png'))
    const pdf = new B111(`${xml}/${nameFile}`, {
      lugarExpedicion: 'CARRETERA FEDERAL CANCUN TULUM KM 292 MANZANA 24 LOTE 24 FRACCION 4 EJIDO PLAYA',
      // logo: {
      //     width: 100,
      //     height: 100,
      //     image: `data:image/png;base64, ${logo.toString('base64')}`
      // }
    });
    // await pdf.save('/home/misael/Documents/proyectos/amir')
    const download = Buffer.from(await pdf.getBase64(), 'base64');
    res.contentType('application/pdf');
    res.send(download);
  }
}
