import Ajv, { ValidateFunction } from 'ajv';
import { existsSync, readFileSync, writeFileSync } from 'fs';

import { JTDDataType } from 'ajv/dist/types/jtd-schema';
// @ts-ignore
import { Xsd2JsonSchema } from 'xsd2jsonschema';

export class LoadXsd {
  private static instance: LoadXsd;
  // Guardar o cargar los archivos JSON según su existencia
  private comprobanteFilePath = 'comprobante.json';
  private catalogosFilePath = 'catalogos.json';
  private tdCFDIFilePath = 'tdCFDI.json';

  private comprobante = {};
  private catalogos = {};
  private tdCFDI = {};
  private route =
    '/Users/amir/Documents/proyectos/amir/cfdi/packages/cfdi/xsd/src/files/';
  private ajv: Ajv;
  private isLoad = false;
  private validate: ValidateFunction;
  constructor() {
    this.ajv = new Ajv();
  }

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
  public get schemas() {
    return {
      comprobante: this.comprobante,
      catalogos: this.catalogos,
      tdCFDI: this.tdCFDI,
    };
  }
  public loadData() {
    //if (this.isLoad) return;
    const cfdiXsdPath = 'cfdv40.xsd';
    const catXsdPath = 'catCFDI.xsd';
    const tdCFDIXsdPath = 'tdCFDI.xsd';

    const load = [];
    console.time(this.comprobanteFilePath);
    if (!this.existsFile(this.comprobanteFilePath)) {
      load.push(this.comprobanteFilePath);
    } else {
      this.comprobante = this.loadJsonFromFile(this.comprobanteFilePath);
    }
    console.timeEnd(this.comprobanteFilePath);

    console.time(this.catalogosFilePath);
    if (!this.existsFile(this.catalogosFilePath)) {
      load.push(this.catalogosFilePath);
    } else {
      this.catalogos = this.loadJsonFromFile(this.catalogosFilePath);
    }
    console.timeEnd(this.catalogosFilePath);

    console.time(this.tdCFDIFilePath);
    if (!this.existsFile(this.tdCFDIFilePath)) {
      load.push(this.tdCFDIFilePath);
    } else {
      this.tdCFDI = this.loadJsonFromFile(this.tdCFDIFilePath);
    }
    console.timeEnd(this.tdCFDIFilePath);

    if (load.length > 0 || load.length === 0) {
      console.log('generando archivos');

      const xs2js = new Xsd2JsonSchema();
      // http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd
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

      this.comprobante = convertedSchemas.comprobante.getJsonSchema();
      this.catalogos = convertedSchemas.catCFDI.getJsonSchema();
      this.tdCFDI = convertedSchemas.tdCFDI.getJsonSchema();
      this.saveJsonToFile(this.comprobanteFilePath, this.comprobante);
      this.saveJsonToFile(this.catalogosFilePath, this.catalogos);
      this.saveJsonToFile(this.tdCFDIFilePath, this.tdCFDI);
    }
    this.ajv.addSchema(this.catalogos, 'catCFDI');
    this.ajv.addSchema(this.tdCFDI);
    this.validate = this.ajv.compile(this.comprobante);
    this.isLoad = true;
  }
  public processSchemasAndValidate(xml: string) {
    console.time('AJV_validate');
    const valid = this.validate(xml);
    console.timeEnd('AJV_validate');

    if (valid) {
      console.log('El objeto es válido según los esquemas.');
    } else {
      console.log(
        'El objeto no cumple con los esquemas. Errores:',
        this.validate.errors
      );
    }

    return {
      errors: this.validate.errors,
      // catalogos,
      //tdCFDI,
      comprobante: this.comprobante,
    };
  }
}
