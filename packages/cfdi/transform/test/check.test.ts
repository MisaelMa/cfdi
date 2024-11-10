import { describe, expect, it, test } from 'vitest';
import { Transform as SaxonHe } from '@saxon-he/cli/src';
import { Transform } from '../src';
import path from 'path';
const files = path.resolve(__dirname, '..', '..', '..', 'files');
const xml_path = `${files}/xml`;
const key_path = `${files}/certificados/LAN7008173R5.key`;
const cer_path = `${files}/certificados/LAN7008173R5.cer`;
const xslt_path = `${files}/4.0/cadenaoriginal.xslt`;

const vehiculo_usado = `${xml_path}/vehiculo_usado.xml`;

describe('blah', () => {
  it('with saxon-he', () => {
    const transform = new SaxonHe();

    const cadena = transform.s(vehiculo_usado).xsl(xslt_path).run();
    // https://xslttest.appspot.com
    const cadena_xslt =
      '||4.0|Serie|Folio|2024-03-01T00:00:00|99|20001000000300022815|CondicionesDePago|2000|MXN|1|2000.16|I|01|PUE|20000|EKU9003173C9|ESCUELA KEMPER URGATE|601|URE180429TM6|UNIVERSIDAD ROBOTICA ESPAÑOLA|86991|601|S01|50211503|1|H87|Servicio|Servicio|200.00|200.00|02|1|002|Tasa|0.160000|0.16|1|002|Tasa|0.160000|0.16|0.16|1.0|10000.00|0.00|AAAABBB|FORD|Mustang|1989|123123123|12312323|1234ASD|5000.00||';

    expect(cadena).toBe(cadena_xslt);
  });

  it('with transform', () => {
    const transform = new Transform(vehiculo_usado);
  });
});
