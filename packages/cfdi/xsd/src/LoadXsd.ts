import { existsSync, readFileSync, writeFileSync } from 'fs';

import Ajv from 'ajv';
// @ts-ignore
import { Xsd2JsonSchema } from 'xsd2jsonschema';

export class LoadXsd {
  private static instance: LoadXsd;
  // Guardar o cargar los archivos JSON según su existencia
  private comprobanteFilePath = 'comprobante.json';
  private catalogosFilePath = 'catalogos.json';
  private tdCFDIFilePath = 'tdCFDI.json';
  private route =
    '/Users/amir/Documents/proyectos/amir/cfdi/packages/cfdi/xsd/src/files/';
  private constructor() {}

  public static getInstance(): LoadXsd {
    if (!LoadXsd.instance) {
      LoadXsd.instance = new LoadXsd();
    }
    return LoadXsd.instance;
  }

  public saveJsonToFile(filePath: string, data: any): void {
    writeFileSync(`${this.route}${filePath}`, JSON.stringify(data, null, 2));
  }

  public existsFile(filePath: string): boolean {
    return existsSync(`${this.route}${filePath}`);
  }
  public loadJsonFromFile(filePath: string): any {
    if (existsSync(`${this.route}${filePath}`)) {
      const fileContents = readFileSync(`${this.route}${filePath}`, 'utf-8');
      return JSON.parse(fileContents);
    }
    return null;
  }

  public processSchemasAndValidate(xml: string) {
    const cfdiXsdPath = 'cfdv40.xsd';
    const catXsdPath = 'catCFDI.xsd';
    const tdCFDIXsdPath = 'tdCFDI.xsd';

    let comprobante = {};
    let catalogos = {};
    let tdCFDI = {};
    const singleton = LoadXsd.getInstance();

    const load = [];

    if (!this.existsFile(this.comprobanteFilePath)) {
      load.push(this.comprobanteFilePath);
    } else {
      comprobante = singleton.loadJsonFromFile(this.comprobanteFilePath);
    }

    if (!this.existsFile(this.catalogosFilePath)) {
      load.push(this.catalogosFilePath);
    } else {
      catalogos = singleton.loadJsonFromFile(this.catalogosFilePath);
    }

    if (!this.existsFile(this.tdCFDIFilePath)) {
      load.push(this.tdCFDIFilePath);
    } else {
      tdCFDI = singleton.loadJsonFromFile(this.tdCFDIFilePath);
    }
    if (load.length > 0) {
      console.log("generando archivos");

      const xs2js = new Xsd2JsonSchema();

      const cfdiXsd = readFileSync(`${this.route}${cfdiXsdPath}`, 'utf-8');
      // http://www.sat.gob.mx/sitio_internet/cfd/catalogos/catCFDI.xsd
      const catXsd = readFileSync(`${this.route}${catXsdPath}`, 'utf-8');
      // http://omawww.sat.gob.mx/sitio_internet/cfd/tipoDatos/tdCFDI/tdCFDI.xsd
      const tdCFDIXsd = readFileSync(`${this.route}${tdCFDIXsdPath}`, 'utf-8');

      const convertedSchemas = xs2js.processAllSchemas({
        schemas: {
          comprobante: cfdiXsd,
          catCFDI: catXsd,
          tdCFDI: tdCFDIXsd,
        },
      });

      comprobante = convertedSchemas.comprobante.getJsonSchema();
      catalogos = convertedSchemas.catCFDI.getJsonSchema();
      tdCFDI = convertedSchemas.tdCFDI.getJsonSchema();
      this.saveJsonToFile(this.comprobanteFilePath, comprobante);
      this.saveJsonToFile(this.catalogosFilePath, catalogos);
      this.saveJsonToFile(this.tdCFDIFilePath, tdCFDI);
    } else {
      console.log("cargando archivos");
    }
    const ajv = new Ajv();
    const validate = ajv
      .addSchema(catalogos)
      .addSchema(tdCFDI)
      .compile(comprobante);

    const valid = validate(xml);

    if (valid) {
      console.log('El objeto es válido según los esquemas.');
    } else {
      console.log(
        'El objeto no cumple con los esquemas. Errores:',
        validate.errors
      );
    }
    return {
      //catalogos,
      tdCFDI,
      comprobante
    }
  }
}

/* // Uso de la clase Singleton
const xmlData = '...'; // Tu objeto XML aquí

const singleton = Singleton.getInstance();
singleton.processSchemasAndValidate(xmlData);
 */
