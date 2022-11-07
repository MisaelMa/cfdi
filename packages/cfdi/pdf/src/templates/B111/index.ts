import {
  Comprobante,
  XmlConcepto,
  XmlEmisor,
  XmlImpuestos,
  XmlReceptor,
} from '@signati/core';

import { B111ESKELETON } from './B111.skeleton';
import { OptionsPdf } from '../../types';
import { RPDF } from '../../abstract-cfdi-pdf';
import { XmlTfd } from '@signati/core/lib/signati/types/Complements/tfd/tfd.com';

export class B111 extends RPDF {
  protected addLogo(): void {
    // throw new Error('Method not implemented.');
  }
  protected addFolio(c: Comprobante): void {
    console.log(c);
    //const data = { text: c.Folio, alignment: 'center' };
    const data = [
      {
        text: c.Serie + ' - ' + c.Folio,
        style: {
          fontSize: 10,
          alignment: 'center',
          color: 'red',
          margin: [0, 0, 0, 0],
        },
      },
      {
        text: c.Serie + ' - ' + c.Folio,
        style: {
          fontSize: 10,
          alignment: 'center',
          color: 'red',
          margin: [0, 0, 0, 0],
        },
      },
    ];
    const arr = this.docDefinition.content[0].table.body[0][2].table.body[3];
    const arr1 = this.docDefinition.content[0].table.body[0][2].table.body[4];
    
    arr.push(data[0]);
    arr1.push(data[1]);
    //  this.docDefinition.content[0].table.body[0][2].table.body[3].push(data);
  }
  protected addEmisorData(emisor: XmlEmisor, expedido: string): void {
    //throw new Error('Method not implemented.');
    this.docDefinition.content[1].table.body[0][0].text[0].text = "Datos del Emisor: " + emisor._attributes?.Nombre + '\n';
  }
  protected addDate(date: string): void {
    //throw new Error('Method not implemented.');
  }
  protected addReceptor(receptor: XmlReceptor): void {
    //  throw new Error('Method not implemented.');
  }
  protected fechaTimbrado(tfd: XmlTfd): void {
    // throw new Error('Method not implemented.');
  }
  protected addCatidad(comprobante: Comprobante): void {
    //throw new Error('Method not implemented.');
  }
  protected addImpuesto(impuesto: XmlImpuestos): void {
    // throw new Error('Method not implemented.');
  }
  protected addNumberToLetter(total: number): void {
    // throw new Error('Method not implemented.');
  }
  protected addCSDEmisor(NoCertificado: string): void {
    //throw new Error('Method not implemented.');
  }
  protected addDetalles(detalles: XmlConcepto): void {
    //throw new Error('Method not implemented.');
  }
  protected addFormaDePago(forma: string): void {
    //throw new Error('Method not implemented.');
  }
  protected addMetodoDePago(metodo: string): void {
    //throw new Error('Method not implemented.');
  }
  protected addMoneda(moneda: string): void {
    //throw new Error('Method not implemented.');
  }
  protected addTipoComprobante(tipo: string): void {
    // throw new Error('Method not implemented.');
  }
  protected addCSDSat(tfd: XmlTfd): void {
    //throw new Error('Method not implemented.');
  }
  protected folioFiscal(tfd: XmlTfd): void {
    //throw new Error('Method not implemented.');
  }
  protected addSelloDgtEmisor(tfd: XmlTfd): void {
    //throw new Error('Method not implemented.');
  }
  protected addSelloDelSat(tfd: XmlTfd): void {
    //throw new Error('Method not implemented.');
  }
  protected addCadenaOriginal(tfd: XmlTfd): void {
    //throw new Error('Method not implemented.');
  }
  protected addQr(
    tfd: XmlTfd,
    emisor: XmlEmisor | undefined,
    receptor: XmlReceptor | undefined,
    total: string
  ): void {
    //throw new Error('Method not implemented.');
  }
  constructor(xml: string, options: OptionsPdf = {} as OptionsPdf) {
    super(xml, options);
    this.setEskeleton(B111ESKELETON);
  }
}
