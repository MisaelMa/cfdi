import { XmlToJson } from '@cfdi/2json';

function construirCadenaOriginalDinamica(obj) {
  let cadenaOriginal = '';
  recorrerNodo(obj, valor => {
      cadenaOriginal += valor + '|';
  });

  // Eliminar el último "|" de la cadena
  if (cadenaOriginal.endsWith('|')) {
      cadenaOriginal = cadenaOriginal.slice(0, -1);
  }

  return cadenaOriginal;
}

// Función recursiva para recorrer cada nodo y ejecutar un callback con el valor del atributo
function recorrerNodo(nodo, callback) {
  if (typeof nodo === 'object') {
      // Procesa todos los atributos del nodo actual
      if (nodo._attributes) {
          Object.values(nodo._attributes).forEach(callback);
      }
      // Recorrer nodos hijos, si existen
      Object.keys(nodo).forEach(key => {
          if (key !== '_attributes') {
              recorrerNodo(nodo[key], callback);
          }
      });
  } else if (Array.isArray(nodo)) {
      nodo.forEach(item => recorrerNodo(item, callback));
  }
}




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
    console.log(this.obtenerValores2(this.xml['cfdi:Comprobante']));
    return `||${clean.join('|')}||`;
  }

  json(xslPath: string) {
    this.xslPath = xslPath;
    return this;
  }

  warnings(type: string = 'silent') {
    return this;
  }

  private async obtenerValores2(jsObject: any) {
    const cadenaOriginal = construirCadenaOriginalDinamica(jsObject);
    console.log(cadenaOriginal);
  
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
