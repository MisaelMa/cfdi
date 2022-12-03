import { NextApiRequest, NextApiResponse } from 'next';
import { cer, key } from '@cfdi/csd';

import path from 'path';

export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cadena =
    '||4.0|E|ACACUN-27|2014-07-08T12:16:50|01|20001000000300022815|16148.04|645.92|MXN|17207.35|I|01|PUE|México|1|1|2|01|asdasd-3234-asdasd-2332-asdas|asdasd-3234-asdasd-2332-asdas|TCM970625MB1|FACTURACION MODERNA SA DE CV|601|asdasd|XAXX010101000|PUBLICO EN GENERAL|112|22|G01|001|1212|2|pieza|Pieza|audifonos|1000|2000|00.0|01|369.83|002|Tasa|0.16|59.17|369.8aaaa3|002|Tasa|0.16|59.17|369.83|002|Tasa|0.16|59.17|21 47 3807 8003832|000121231|51241200|IM020|1|PIEZA|25311FM00114 CREMA FUNGICIDA 35ML (ACIDO UNDECILENICO, ARBOL DEL TE VEHICULO EMOLIENTE)|172.50|172.50|001|1212|2|pieza|Pieza|audifonos|1000|2000|00.0|01|JUFA7608212V6|ADRIANA JUAREZ FERNANDEZ|601|29133|002|59.17|1000|1|002|Tasa|0.16|59.17||';
  const fil = path.join(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    '..',
    '..',
    'files',
    'certificados',
    'LAN7008173R5.cer.pem'
  );
  const filkey = path.join(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    '..',
    '..',
    'files',
    'certificados',
    'LAN7008173R5.key.pem'
  );
  console.log(fil, filkey);

  cer.setFile(fil);
  key.setFile(filkey, '12345678a');

  res.send({
    // fil,
    cer: {
      data: cer.getData(),
      version: cer.version(),
      serial: cer.serial(),
      cer: cer.getNoCer(),
      pubkey: cer.pubkey({ begin: true }),
      //module: cer.modulu(),
      // subjectHash: cer.subjectHash(),
      // issuerHash: cer.issuerHash(),
      // ocspid: cer.ocspid(),
      // hash: cer.hash(),
      // subjectHashOld: cer.subjectHashOld(),
      // issuerHashOld: cer.issuerHashOld(),
      issuer: cer.issuer(),
      subject: cer.subject(),
      valid: cer.date(),
    },
    key: {
      forge: key.signatureHexForge('amir'),
      cripto: key.signatureHexCripto('amir'),
    },
    data: key.getData(),
  });
}
