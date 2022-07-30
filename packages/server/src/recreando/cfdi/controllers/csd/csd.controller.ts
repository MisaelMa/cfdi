import { Controller, Res, Get } from '@nestjs/common';
import { cer } from "@cfdi/csd"
import { Response } from 'express';
import path from 'path';
/**
 *
 */
@Controller('cfdi/csd')
export class CsdController {
  @Get('/')
  async index(@Res() res: Response) {
    const fil = path.join(__dirname, '..', '..', '..', '..', '..', '..', 'files', 'certificados', 'maca961017759.cer')
    cer.setFile(fil);
    res.json({
      data: "amir",
      fil,
      amir: {
        version: cer.version(),
        serial: cer.serial(),
        cer: cer.getNoCer(),
        pubkey: cer.pubkey({ begin: true }),
        module: cer.modulu(),
        subjectHash: cer.subjectHash(),
        issuerHash: cer.issuerHash(),
        ocspid: cer.ocspid(),
        hash: cer.hash(),
        subjectHashOld: cer.subjectHashOld(),
        issuerHashOld: cer.issuerHashOld(),
        issuer: cer.issuer(),
        subject: cer.subject(),
        date: cer.date()

      },
      cer: cer.getData()
    })

  }
}
