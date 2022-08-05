import { TDocumentDefinitions } from 'pdfmake/interfaces';
import {
  Comprobante,
  XmlCdfi,
  XmlConcepto,
  XmlEmisor,
  XmlImpuestos,
  XmlReceptor,
} from '@signati/core';
import { XmlToJson } from '@cfdi/utils';
// import { logo } from '@cfdi/utils';
import { createPdf, TCreatedPdf } from 'pdfmake/build/pdfmake';
import { RPDF } from '../../abstract-cfdi-pdf';
import { A111SKELETON } from './A111.skelton';
import { OptionsPdf } from '../../types';
import { XmlTfd } from '@signati/core/lib/signati/types/Complements/tfd/tfd.com';
export class A111 extends RPDF {
  constructor(xml: string, options: OptionsPdf = {} as OptionsPdf) {
    super(xml, options);
    this.setEskeleton(A111SKELETON);
  }

  protected addLogo(): void {
    // throw new Error('Method not implemented.');
  }
  protected addFolio(c: Comprobante): void {
    //throw new Error('Method not implemented.');
  }
  protected addEmisorData(emisor: XmlEmisor, expedido: string): void {
    //throw new Error('Method not implemented.');
  }
  protected addDate(date: string): void {
    //throw new Error('Method not implemented.');
  }
  protected addReceptor(receptor: XmlReceptor): void {
    //throw new Error('Method not implemented.');
  }
  protected fechaTimbrado(tfd: XmlTfd): void {
    //throw new Error('Method not implemented.');
  }
  protected addCatidad(comprobante: Comprobante): void {
    //throw new Error('Method not implemented.');
  }
  protected addImpuesto(impuesto: XmlImpuestos): void {
    //throw new Error('Method not implemented.');
  }
  protected addNumberToLetter(total: number): void {
    //throw new Error('Method not implemented.');
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
    //throw new Error('Method not implemented.');
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
}
