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

export function XmlToJson(xmlPath: string, config?: {original: boolean}): XmlCdfi {
    const original = Boolean(config?.original);
    const stringXml = isPath(xmlPath) ? readFileSync(xmlPath, 'utf8') : xmlPath;
    const options: Options.XML2JS = {
        ignoreComment: false,
        alwaysChildren: false,
        compact: original,
        ignoreDeclaration: false,
        elementNameFn: (name: string) => original ? name : name.replace(/^.*:/, '')
    };
    const json = xml2js(stringXml, options);
    const onlyJson = () => {
      const { declaration, elements } = json;
      const comprobante_element = elements.find((el: any) => el.name ===  'Comprobante');
      const comprobante = comprobante_element ? extractAttributes(comprobante_element) : {};
      return {
        declaration: {
            ...declaration.attributes
        },
        'Comprobante': comprobante
      }
    }
    const result = original ? json : onlyJson();
    return result as XmlCdfi;
}
