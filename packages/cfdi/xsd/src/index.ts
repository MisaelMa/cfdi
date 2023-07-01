// @ts-ignore

import { readFileSync, writeFileSync } from 'fs';

import Ajv from 'ajv';
import {LoadXsd} from './LoadXsd'
// @ts-ignore
import { Xsd2JsonSchema } from 'xsd2jsonschema';
import { js2xml } from 'xml-js';

function cleanObjectKeys(obj) {
  if (typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(cleanObjectKeys);
  }

  const cleanedObj = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (key === '_attributes') {
        const attributes = obj[key];
        for (const attrKey in attributes) {
          if (Object.prototype.hasOwnProperty.call(attributes, attrKey)) {
            cleanedObj[`@${attrKey}`] = attributes[attrKey];
          }
        }
      } else {
        const cleanedKey = key.split(':').pop();
        cleanedObj[cleanedKey] = cleanObjectKeys(obj[key]);
      }
    }
  }

  return cleanedObj;
}


export default class TransformXsd {
  xml: any = {};
  xslPath = '';
  fullPath = '';
  constructor(xml: any) {
    this.xml = xml;
  }

  async xsd(xml: any) {



    const singleton = LoadXsd.getInstance();

    const cfdi = cleanObjectKeys(xml)

    return {
      cfdi,
      data: singleton.processSchemasAndValidate(cfdi)
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
