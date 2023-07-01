import { CFDI } from '@cfdi/xml';
import { general } from './general';
import path from 'path';

export const getFactura = async (factura: string): Promise<CFDI> => {
  const files = path.join(
    path.resolve(__dirname, '..', '..', '..', '..', '..', '..', 'files')
  );
  console.log('ruta', files);

  const styleSheet = path.join(files, '4.0', 'cadenaoriginal.xslt');

  const key = `${files}/certificados/LAN7008173R5.key`;
  const cer = `${files}/certificados/LAN7008173R5.cer`;

  const facturas: any = {
    general: general({ cer, key, styleSheet }),
  };
  const cfdi = facturas[factura] || Promise.resolve();
  return await cfdi;
};
