import { xml2js, xml2json } from 'xml-js';

import { readFileSync } from 'fs';

export default class TransformXsd {
  xml: any = {};
  xslPath = '';
  fullPath = '';
  constructor(xml: any) {
    this.xml = xml;
  }

  async run() {
    const rear = await this.obtenerValores(this.xml['cfdi:Comprobante']);
    const xsd = readFileSync(
      '/Users/amir/Documents/proyectos/amir/cfdi/packages/cfdi/xsd/src/files/cfdv40.xsd',
      'utf-8'
    );
    var options = { ignoreComment: true, alwaysChildren: true };
    /*  return xml2js(xsd, options)
      .elements[0].elements[2].elements[1].elements.filter((e) => e.attributes)
      .map((e) => e); */
    return `||${rear.filter((e) => e).join('|')}||`;
  }

  s(fullPath: string) {
    this.fullPath = fullPath;
    return this;
  }

  xsl(xslPath: string) {
    this.xslPath = xslPath;
    return this;
  }
  warnings(type: string = 'silent') {
    return this;
  }

  private obtenerValores(obj: any, options: any = { tagKey: 'comprobante' }) {
    const { tagKey = 'comprobante', ignore = false } = options;
    let valores: (string | number)[] = [];
    const omitKeys = [
      'xmlns:cfdi',
      'xmlns:xsi',
      'xsi:schemaLocation',
      'Certificado',
      'xmlns:destruccion',
      'xmlns:iedu',
      'xmlns:pago10',
    ];
    const miObjeto = {
      comprobante: [
        '_attributes',
        'cfdi:InformacionGlobal',
        'cfdi:CfdiRelacionados',
        'cfdi:Emisor',
        'cfdi:Receptor',
        'cfdi:Conceptos',
        'cfdi:Impuestos',
        'cfdi:Complemento',
      ],
      concepto: [],
    };
    // @ts-ignore
    const clavesOrdenadas = ignore ? Object.keys(obj) : miObjeto[tagKey];
    for (let key of clavesOrdenadas) {
      if (!omitKeys.includes(key)) {
        if (typeof obj[key] === 'object') {
          valores = valores.concat(
            this.obtenerValores(obj[key], { ignore: true })
          );
        } else {
          console.log(obj[key], key);
          valores.push(obj[key]);
        }
      }
    }

    return valores;
  }
}
