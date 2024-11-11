import { XmlToJson } from '@cfdi/2json';
export default class Transform {
  xml: any = {};
  xslPath = '';
  fullPath = '';
  
  s(archivo: string) {
    this.xml =  XmlToJson(archivo, { original: true });
    console.log(JSON.stringify(this.xml['cfdi:Comprobante']['cfdi:Impuestos'], null, 2));
    return this;
  }

  async run() {
    const rear = await this.obtenerValores(this.xml['cfdi:Comprobante']);
    const clean = rear.filter((e) => Boolean(e));
    return `||${clean.join('|')}||`;
  }

  json(xslPath: string) {
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
      'xmlns:vehiculousado',
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

    const ingnore: string[] = ['Sello'];
    // @ts-ignore
    const clavesOrdenadas = ignore ? Object.keys(obj) : miObjeto[tagKey];
    for (let key of clavesOrdenadas) {

      if (!omitKeys.includes(key)) {
        if (typeof obj[key] === 'object') {
          valores = valores.concat(this.obtenerValores(obj[key], { ignore: true }));
        } else {
          if (!ingnore.includes(key)) {
            valores.push(obj[key]);
          }
        }
      }
    }

    return valores;
  }
}
