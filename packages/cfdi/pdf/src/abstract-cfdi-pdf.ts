import { Comprobante, XmlCdfi, XmlConcepto, XmlEmisor, XmlImpuestos, XmlReceptor } from "@signati/core";
import { XmlTfd } from "@signati/core/lib/signati/types/Complements/tfd/tfd.com";
import { createPdf, TCreatedPdf, vfs } from 'pdfmake/build/pdfmake';
import { pdfMake } from 'pdfmake/build/vfs_fonts';
import { OptionsPdf } from "./types";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { XmlToJson } from "@cfdi/utils";
// @ts-ignore
vfs = pdfMake.vfs;
export abstract class RPDF {
  public xml: XmlCdfi = {} as XmlCdfi;
  public options: OptionsPdf;
  public docDefinition: TDocumentDefinitions | any = {}
  constructor(xml: string, options: OptionsPdf = {} as OptionsPdf) {
    // @ts-ignore
    this.xml = XmlToJson(xml)
    this.options = options
  }
  setEskeleton(body: TDocumentDefinitions): void {
    this.docDefinition = body
  }
  protected abstract addLogo(): void;
  protected abstract addFolio(c: Comprobante): void;
  protected abstract addEmisorData(emisor: XmlEmisor, expedido: string): void
  protected abstract addDate(date: string): void
  protected abstract addReceptor(receptor: XmlReceptor): void
  protected abstract fechaTimbrado(tfd: XmlTfd): void
  protected abstract addCatidad(comprobante: Comprobante): void
  protected abstract addImpuesto(impuesto: XmlImpuestos): void
  protected abstract addNumberToLetter(total: number): void
  protected abstract addCSDEmisor(NoCertificado: string): void
  protected abstract addDetalles(detalles: XmlConcepto): void
  protected abstract addFormaDePago(forma: string): void
  protected abstract addMetodoDePago(metodo: string): void
  protected abstract addMoneda(moneda: string): void
  protected abstract addTipoComprobante(tipo: string): void
  protected abstract addCSDSat(tfd: XmlTfd): void
  protected abstract folioFiscal(tfd: XmlTfd): void
  protected abstract addSelloDgtEmisor(tfd: XmlTfd): void
  protected abstract addSelloDelSat(tfd: XmlTfd): void
  protected abstract addCadenaOriginal(tfd: XmlTfd): void
  protected abstract addQr(tfd: XmlTfd, emisor: XmlEmisor | undefined, receptor: XmlReceptor | undefined, total: string): void
  public async getDocument(): Promise<TCreatedPdf> {
    if (this.xml['cfdi:Comprobante']['cfdi:Emisor']) {
      this.addEmisorData(this.xml['cfdi:Comprobante']['cfdi:Emisor'], this.xml['cfdi:Comprobante']._attributes.LugarExpedicion)
    }
    await this.addLogo();
    this.addFolio(this.xml['cfdi:Comprobante']._attributes)
    this.addDate(this.xml['cfdi:Comprobante']._attributes.Fecha)
    // @ts-ignore
    this.addReceptor(this.xml['cfdi:Comprobante']['cfdi:Receptor']);
    this.addDetalles(this.xml['cfdi:Comprobante']['cfdi:Conceptos']);
    this.addCatidad(this.xml['cfdi:Comprobante']._attributes);
    // @ts-ignore
    this.addImpuesto(this.xml['cfdi:Comprobante']['cfdi:Impuestos'])
    this.addNumberToLetter(+this.xml['cfdi:Comprobante']._attributes.Total);
    this.addCSDEmisor(this.xml['cfdi:Comprobante']._attributes.NoCertificado)
    this.addFormaDePago(this.xml['cfdi:Comprobante']._attributes.FormaPago);
    this.addMetodoDePago(this.xml['cfdi:Comprobante']._attributes.MetodoPago);
    this.addMoneda(this.xml['cfdi:Comprobante']._attributes.Moneda);
    this.addTipoComprobante(this.xml['cfdi:Comprobante']._attributes.TipoDeComprobante);

    if (this.xml['cfdi:Comprobante']!['cfdi:Complemento']) {
      const complements = this.xml['cfdi:Comprobante']['cfdi:Complemento']
      if (complements['tfd:TimbreFiscalDigital']) {
        const tfd = complements['tfd:TimbreFiscalDigital']
        this.fechaTimbrado(tfd)
        this.addCSDSat(tfd)
        this.folioFiscal(tfd)
        this.addSelloDgtEmisor(tfd)
        this.addSelloDelSat(tfd)
        this.addCadenaOriginal(tfd)
        await this.addQr(tfd, this.xml['cfdi:Comprobante']['cfdi:Emisor'], this.xml['cfdi:Comprobante']['cfdi:Receptor'], this.xml['cfdi:Comprobante']._attributes.Total);
      }
    }

    return createPdf(this.docDefinition);
  }
}
