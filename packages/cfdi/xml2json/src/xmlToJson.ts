import { XmlCdfi } from '@cfdi/types';
import { readFileSync } from 'fs';
import { ElementCompact, Element, Options, xml2js } from 'xml-js';
import { isPath } from '@cfdi/utils';

function extractAttributes(element: Element | ElementCompact) {
    const attributes: any = { ...element.attributes };

    if (element.elements) {
        element.elements.forEach((child: any) => {
            const childData = child.elements ? extractAttributes(child) : { ...child.attributes };

            // Verificar si el nombre del padre es el plural del hijo (ej. Conceptos -> Concepto)
            const isPluralParent = element.name.toLowerCase().endsWith(child.name.toLowerCase() + 's'); // Verifica si el padre es plural

            // Si el nombre del padre es el plural del hijo, aseguramos que el hijo sea tratado como un array
            if (isPluralParent) {
                if (attributes[child.name]) {
                    if (Array.isArray(attributes[child.name])) {
                        attributes[child.name].push(childData);
                    } else {
                        attributes[child.name] = [attributes[child.name], childData];
                    }
                } else {
                    attributes[child.name] = [childData];  // Forzar a que sea un array
                }
            } else {
                // Si no es plural, manejar como objeto único
                if (attributes[child.name]) {
                    if (Array.isArray(attributes[child.name])) {
                        attributes[child.name].push(childData);
                    } else {
                        attributes[child.name] = [attributes[child.name], childData];
                    }
                } else {
                    attributes[child.name] = childData;
                }
            }
        });
    }

    return attributes;
}

export function XmlToJson(xmlPath: string): XmlCdfi {
    const stringXml = isPath(xmlPath) ? readFileSync(xmlPath, 'utf8') : xmlPath;
    const options: Options.XML2JS = {
        ignoreComment: true,
        alwaysChildren: true,
        compact: false,
        ignoreDeclaration: false, // omite la declaración de XML
        elementNameFn: (name: string) => name.replace(/^.*:/, ''), // elimina el prefijo en elementos
        attributesFn: (value, parentElement) => {
            return value;
        }
    };
    const json = xml2js(stringXml, options);
    console.log(JSON.stringify(json, null, 2));
    //const comprobante = json.elements.find((el: any) => el.name === 'cfdi:Comprobante');
    const comprobante = json.elements.find((el: any) => el.name === 'Comprobante');
    const result = extractAttributes(comprobante);
    return result as XmlCdfi;
}
