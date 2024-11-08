// @ts-ignore

import { js2xml, json2xml, xml2js } from 'xml-js';
import { readFileSync, writeFileSync } from 'fs';

type XsdElement = {
  name: string;
  minOccurs?: string;
  elements?: XsdElement[];
  attributes?: Record<string, { name: string; use: string }>;
};

type JsonSchema = {
  $schema: string;
  type: string;
  properties: Record<string, any>;
  required: string[];
  additionalProperties: false;
};

function cleanObjectKeys(obj: any): any {
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
            if (!attrKey.includes(':')) {
              // @ts-ignore
              cleanedObj[`@${attrKey}`] = attributes[attrKey];
            }
          }
        }
      } else {
        const cleanedKey = key.split(':').pop();
        // @ts-ignore
        cleanedObj[cleanedKey] = cleanObjectKeys(obj[key]);
      }
    }
  }

  return cleanedObj;
}

//export const CFDIXsd = LoadXsd.getInstance();

export default class Transform {
  xml: any = {};
  xslPath = '';
  fullPath = '';
  constructor(xml: any) {
    this.xml = xml;
  }

  async run() {
    const rear = await this.obtenerValores(this.xml['cfdi:Comprobante']);
    return `||${rear.filter((e) => e).join('|')}||`;
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
          valores = valores.concat(
            this.obtenerValores(obj[key], { ignore: true })
          );
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
