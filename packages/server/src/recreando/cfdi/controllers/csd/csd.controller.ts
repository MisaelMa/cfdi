import { Controller, Res, Get } from '@nestjs/common';
import { cer, key } from "@cfdi/csd"
import { Response } from 'express';
import path from 'path';
/**
 *
 */
@Controller('cfdi/csd')
export class CsdController {
  @Get('/')
  async index(@Res() res: Response) {
    const fil = path.join(__dirname, '..', '..', '..', '..', '..', '..', 'files', 'certificados', 'LAN7008173R5.cer.pem')
    const filkey = path.join(__dirname, '..', '..', '..', '..', '..', '..', 'files', 'certificados', 'LAN7008173R5.key.pem')
    cer.setFile(fil);
    key.setFile(filkey, '12345678a')

    res.json({
      fil,
      cer: {
        data: cer.getData(),
        version: cer.version(),
        serial: cer.serial(),
        cer: cer.getNoCer(),
        // pubkey: cer.pubkey({ begin: true }),
        // module: cer.modulu(),
        // subjectHash: cer.subjectHash(),
        // issuerHash: cer.issuerHash(),
        // ocspid: cer.ocspid(),
        // hash: cer.hash(),
        // subjectHashOld: cer.subjectHashOld(),
        // issuerHashOld: cer.issuerHashOld(),
        issuer: cer.issuer(),
        subject: cer.subject(),
        date: cer.date()

      },
      key: {
        forge: key.signatureHexForge("amir"),
        cripto: key.signatureHexCripto("amir")
      },
      data: key.getData()
    })

  }
}
