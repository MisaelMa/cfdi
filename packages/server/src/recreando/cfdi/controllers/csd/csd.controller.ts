import { Controller, Res, Get } from '@nestjs/common';
import * as key from "@cfdi/csd/key"
import * as cer from "@cfdi/csd/cer"
import { gob, curp } from "@cfdi/curp"
import { Response } from 'express';
import path from 'path';
import { __dirname } from "../../../../utils/path"
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
      // fil,
      cer: {
        //  data: cer.getData(),
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

  @Get('/curp')
  async curp(@Res() res: Response) {

    const data = await gob.findByCurp('MACA961017HQRRHM06');
    res.json({ ...data })

  }
}
