// @ts-ignore

import { js2xml, xml2js } from 'xml-js';

import Ajv from 'ajv';
// @ts-ignore
import { Xsd2JsonSchema } from 'xsd2jsonschema';
import { readFileSync } from 'fs';

export default class TransformXsd {
  xml: any = {};
  xslPath = '';
  fullPath = '';
  constructor(xml: any) {
    this.xml = xml;
  }

  async xsd(xml: any) {
    const xsd = readFileSync(
      '/Users/amir/Documents/proyectos/amir/cfdi/packages/cfdi/xsd/src/files/cfdv40.xsd',
      'utf-8'
    );
    console.log(Xsd2JsonSchema);

    var optionsxml = { ignoreComment: true, alwaysChildren: true };
    const schema = await xml2js(
      xsd,
      optionsxml
    ).elements[0].elements[2].elements[1].elements.filter(
      (x) => x.name !== 'xs:sequence'
    );

    const optionsc = { compact: true, ignoreComment: true, spaces: 4 };
    const cfdi = await js2xml(schema, optionsc);

    const options = { indent: '  ', noRefs: true };
    const xs2js = new Xsd2JsonSchema();

    const convertedSchemas = xs2js.processAllSchemas({
      schemas: { 'hello_world.xsd': cfdi },
    });
    const jsonSchema = convertedSchemas['hello_world.xsd'].getJsonSchema();

    const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

    //const validate = ajv.compile(jsonSchema);

    //const valid = validate(xml);

    return {
      schema,
      jsonSchema,
      cfdi,
      //valid,
    };
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
