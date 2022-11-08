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
import { XmlConceptoProperties } from '@signati/core/lib/signati/types/Tags/concepts.interface';
import { XmlTfd } from '@signati/core/lib/signati/types/Complements/tfd/tfd.com';
import { ContentText } from 'pdfmake/interfaces';

export class B111 extends RPDF {
  protected addLogo(): void {
    // throw new Error('Method not implemented.');
  }
  protected addFolio(c: Comprobante): void {
    console.log(c);
    const data = { text: c.Folio, alignment: 'center',color:"red" };
    
    const arr = this.docDefinition.content[0].table.body[0][2].table.body[3];
    this.docDefinition.content[0].table.body[0][2].table.body[5].text=c.NoCertificado;
    
    arr.push(data);
    //  this.docDefinition.content[0].table.body[0][2].table.body[3].push(data);
  }
  protected addEmisorData(emisor: XmlEmisor, expedido: string): void {
    //throw new Error('Method not implemented.');
    this.docDefinition.content[1].table.body[0][0].text[2].text =" "+ emisor._attributes?.Nombre + "\n" ;
    this.docDefinition.content[1].table.body[0][0].text[4].text =" "+ emisor._attributes?.Rfc + "\n" ;
    this.docDefinition.content[1].table.body[0][0].text[6].text =" "+ this.options.lugarExpedicion + "\n" ;
    this.docDefinition.content[1].table.body[0][0].text[8].text =" "+ emisor._attributes?.RegimenFiscal + "\n" ;
 
  }
  protected addDate(date: string): void {
    //throw new Error('Method not implemented.');
  }
  protected addReceptor(receptor: XmlReceptor): void {
    this.docDefinition.content[1].table.body[0][1].text[2].text =" "+ receptor._attributes?.Nombre + "\n" ;
    this.docDefinition.content[1].table.body[0][1].text[4].text =" "+ receptor._attributes?.Rfc + "\n" ;
    this.docDefinition.content[1].table.body[0][1].text[6].text =" "+ this.options.lugarExpedicion + "\n" ;
    this.docDefinition.content[1].table.body[0][1].text[8].text =" "+ receptor._attributes?.UsoCFDI + "\n" ;
 
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
    let deatails: XmlConceptoProperties[] = [];
    if (Array.isArray(detalles['cfdi:Concepto'])) {
      deatails = detalles['cfdi:Concepto'];
    } else {
      // @ts-ignore
      deatails.push(detalles['cfdi:Concepto']);
    }

    for (const detail of deatails) {
      const con = detail._attributes;
      const descripcion: ContentText[] = [
        {
          text: con.Descripcion + '\n',
        },
      ];
   // this.docDefinition.content[2].table.body[1][1].push([con.Cantidad]) ;
    }
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
