import { Comprobante, XmlConcepto, XmlEmisor } from '@signati/core';
import { XmlReceptor } from '@signati/core/lib/signati/types/Tags/receptor.inteface';
import {
  FormaPagoList,
  MetodoPagoList,
  RegimenFiscalList,
  TipoComprobanteList
} from '@signati/core/lib/signati/types/Catalogs';
import { XmlTfd } from '@signati/core/lib/signati/types/Complements/tfd/tfd.com';
import { XmlImpuestos } from '@signati/core/lib/signati/types/Tags/impuestos.interface';
import { XmlConceptoProperties } from '@signati/core/lib/signati/types/Tags/concepts.interface';
import { ContentText } from 'pdfmake/interfaces';
import { logo, NumeroALetras } from '@cfdi/utils';
// @ts-ignore
import * as QRCode from 'qrcode';

import { A117SKELETON } from "./A117.skeleton"
import { RPDF } from '../../abstract-cfdi-pdf';
import { OptionsPdf } from '../../types';
export class A117 extends RPDF {

  constructor(xml: string, options: OptionsPdf = {} as OptionsPdf) {
    super(xml, options)
    this.setEskeleton(A117SKELETON)
  }
  protected addLogo(): void {

    if (this.options.logo) {
      if (typeof this.options.logo === 'object') {
        this.docDefinition.content[0].columns[0] = {
          width: this.options.logo.width,
          image: this.options.logo.image,
          height: this.options.logo.height,
          alignment: 'left'
        }
      } else {
        this.docDefinition.content[0].columns[0] = {
          width: 100,
          image: this.options.logo,
          height: 100,
          alignment: 'left'
        }
      }
    } else {
      this.docDefinition.content[0].columns[0] = {
        width: 100,
        image: logo,
        height: 100,
        alignment: 'left'
      }
    }
  }

  protected addFolio(c: Comprobante) {
    const data = [{
      text: c.Serie + ' - ' + c.Folio,
      style: {
        fontSize: 10,
        alignment: 'center',
        color: 'red',
        margin: [0, 0, 0, 0],
      }
    }]
    this.docDefinition.content[0].columns[3][1].table.body.push(data)
  }

  protected addEmisorData(emisor: XmlEmisor, expedido: string) {
    this.docDefinition.content[0].columns[2].text[0].text = emisor._attributes!.Nombre + '\n'
    this.docDefinition.content[0].columns[2].text[1].text[1].text = emisor._attributes!.Rfc + '\n'
    const regimen = RegimenFiscalList.find((f) => f.value.toString() === emisor._attributes!.RegimenFiscal);
    this.docDefinition.content[0].columns[2].text[2].text[1].text = emisor._attributes!.RegimenFiscal + ' - ' + regimen!.descripcion.toUpperCase() + '\n'
    this.docDefinition.content[0].columns[2].text[3].text[1].text = this.options.lugarExpedicion ? this.options.lugarExpedicion : expedido;
  }

  protected addDate(date: string) {
    const data = [{
      text: date,
      style: {
        fontSize: 10,
        alignment: 'center',
        color: 'red',
        margin: [0, 0, 0, 0],
      }
    }]
    this.docDefinition.content[0].columns[3][2].table.body.push(data)
  }

  protected addDetalles(detalles: XmlConcepto) {
    let deatails: XmlConceptoProperties[] = [];
    /* al momento de la conversion no respeta el array
  lo convierte en objeto cuando es solo un item,
  por eso la validacion si es typo array o no*/
    if (Array.isArray(detalles['cfdi:Concepto'])) {
      deatails = detalles['cfdi:Concepto'];
    } else {
      // @ts-ignore
      deatails.push(detalles['cfdi:Concepto'])
    }
    for (const detail of deatails) {
      const con = detail._attributes
      const descripcion: ContentText[] = [
        {
          text: con.Descripcion + '\n'
        }
      ]
      if (detail['cfdi:ComplementoConcepto']) {
        if (detail['cfdi:ComplementoConcepto']['iedu:instEducativas']) {
          if (detail['cfdi:ComplementoConcepto']['iedu:instEducativas']._attributes) {
            const iedu = detail['cfdi:ComplementoConcepto']['iedu:instEducativas']._attributes
            descripcion.push({ text: 'ALUMNO: ', bold: true });
            descripcion.push({ text: iedu!.nombreAlumno.toLocaleUpperCase() + '\n' });
            descripcion.push({ text: 'CURP: ', bold: true });
            descripcion.push({ text: iedu!.CURP.toLocaleUpperCase() + '\n' });
            descripcion.push({ text: 'NIVEL EDUCATIVO: ', bold: true });
            descripcion.push({ text: iedu!.nivelEducativo.toLocaleUpperCase() + '\n' });
            descripcion.push({ text: 'CLAVE: ', bold: true });
            descripcion.push({ text: iedu!.autRVOE.toLocaleUpperCase() + '\n' });
            descripcion.push({ text: 'RFC: ', bold: true });
            descripcion.push({ text: iedu!.rfcPago.toLocaleUpperCase() + '\n' });
          }
        }
        if (detail['cfdi:ComplementoConcepto']['terceros:PorCuentadeTerceros']) {
          // @ts-ignore
          const terceros = detail['cfdi:ComplementoConcepto']['terceros:PorCuentadeTerceros'];
        }
        if (detail['cfdi:ComplementoConcepto']['ventavehiculos:VentaVehiculos']) {
          // @ts-ignore
          const ventavehiculos = detail['cfdi:ComplementoConcepto']['ventavehiculos:VentaVehiculos'];
        }
      }
      this.docDefinition.content[2].table.body.push([
        {
          text: con.Cantidad
        },
        {
          text: con.ClaveProdServ
        },
        {
          text: descripcion
        },
        {
          text: con.ClaveUnidad
        },
        {
          text: '$' + con.ValorUnitario
        },
        {
          text: '$' + con.Descuento
        },
        {
          text: '$' + con.Importe
        }
      ])
    }
    // this.docDefinition.content[2].table.body.push(table)
  }

  protected addReceptor(receptor: XmlReceptor | undefined) {
    this.docDefinition.content[1].text[2] = { text: receptor ? receptor._attributes ? receptor._attributes.Nombre + '\n' : '' : '' }
    this.docDefinition.content[1].text[4] = { text: receptor ? receptor._attributes ? receptor._attributes.Rfc + '\n' : '' : '' }
    this.docDefinition.content[1].text[6] = { text: receptor ? receptor._attributes ? receptor._attributes.UsoCFDI + '\n' : '' : '' }
  }

  protected addCatidad(comprobante: Comprobante) {
    this.docDefinition.content[3].table.body[0][1].text[1] = { text: '$' + comprobante.SubTotal + '\n' }
    this.docDefinition.content[3].table.body[0][1].text[3] = { text: '$' + comprobante.Descuento + '\n' }
    this.docDefinition.content[3].table.body[0][1].text[7] = { text: '$' + comprobante.Total + '\n' }
  }

  protected addImpuesto(impuesto: XmlImpuestos | undefined) {
    if (impuesto) {
      // tslint:disable-next-line:no-unused-expression
      let impues = '0.00'
      if (impuesto._attributes.TotalImpuestosTrasladados) {
        impues = impuesto._attributes.TotalImpuestosTrasladados
      }
      this.docDefinition.content[3].table.body[0][1].text[5] = { text: '$' + impues + '\n' }
    }
  }

  protected addNumberToLetter(total: number) {
    // tslint:disable-next-line:no-unused-expression
    const nue = new NumeroALetras();
    this.docDefinition.content[3].table.body[0][0].stack[1].text = nue.NumeroALetras(total, {
      plural: 'PESOS',
      singular: 'PESO',
      centPlural: 'CENTAVOS',
      centSingular: 'CENTAVO'
    });

  }

  protected addCSDEmisor(NoCertificado: string) {
    this.docDefinition.content[5].table.body[1][0].text = NoCertificado
  }

  protected fechaTimbrado(tfd: XmlTfd) {
    this.docDefinition.content[5].table.body[1][1].text = tfd._attributes.FechaTimbrado
  }

  protected addCSDSat(tfd: XmlTfd) {
    this.docDefinition.content[5].table.body[3][1].text = tfd._attributes.NoCertificadoSAT
  }

  protected folioFiscal(tfd: XmlTfd) {
    this.docDefinition.content[5].table.body[3][0].text = tfd._attributes.UUID.toUpperCase()
  }

  protected addSelloDgtEmisor(tfd: XmlTfd) {
    this.docDefinition.content[6].columns[1].table.body[1][0].text = tfd._attributes.SelloCFD;
  }

  protected addSelloDelSat(tfd: XmlTfd) {
    // @ts-ignore
    this.docDefinition.content[6].columns[1].table.body[3][0].text = tfd._attributes.SelloSAT
  }

  protected addCadenaOriginal(tfd: XmlTfd) {
    const cadena = `||${tfd._attributes.Version}|${tfd._attributes.UUID}|${tfd._attributes.FechaTimbrado}|${tfd._attributes.RfcProvCertif}|${tfd._attributes.SelloCFD}|${tfd._attributes.NoCertificadoSAT}||`
    this.docDefinition.content[6].columns[1].table.body[5][0].text = cadena;
  }

  protected addFormaDePago(forma: string) {
    const description = FormaPagoList.find((f) => f.value === forma);
    // console.log(this.docDefinition.content[4].columns[0].text, description)
    this.docDefinition.content[4].columns[0].text[1] = {
      text: forma + ' - ' + description!.label + '\n'
    }
  }


  protected addMetodoDePago(metodo: string) {
    const description = MetodoPagoList.find((f) => f.value === metodo);
    this.docDefinition.content[4].columns[0].text[3] = {
      text: metodo + ' - ' + description!.label + '\n'
    }
    // console.log(this.docDefinition.content[4])
  }

  protected addCuenta(cuenta: string) {
    this.docDefinition.content[4].columns[0].text[5] = {
      text: cuenta + '\n'
    }
    // console.log(this.docDefinition.content[5])
  }

  protected addMoneda(moneda: string) {
    // console.log(this.docDefinition.content[4].columns[1].text)
    this.docDefinition.content[4].columns[1].text[1] = {
      text: moneda + '\n'
    }
  }

  protected addTipoComprobante(tipo: string) {

    const description = TipoComprobanteList.find((f) => f.value === tipo);
    this.docDefinition.content[4].columns[1].text[3] = {
      text: tipo + ' - ' + description!.label + '\n'
    }
    // console.log(this.docDefinition.content[6].columns[1].text)
  }

  protected async addQr(tfd: XmlTfd, emisor: XmlEmisor | undefined, receptor: XmlReceptor | undefined, total: string) {
    const url = `https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx`;
    const uuid = tfd._attributes.UUID;
    const rfcEmisor = emisor!._attributes!.Rfc
    const rfcReceptor = receptor!._attributes!.Rfc
    const sello = tfd._attributes.SelloCFD.substr(-8)
    const totalSplit = total.split('.');
    const totalStart = totalSplit[0].padStart(18, '0')
    const totalEnd = totalSplit[1] ? totalSplit[1].padEnd(6, '0') : '0'.padEnd(6, '0')
    const cantidad = totalStart + '.' + totalEnd
    const urlQr = `${url}?id=${uuid}&re=${rfcEmisor}&rr=${rfcReceptor}&tt=${cantidad}&fe=${sello}`
    const text = await QRCode.toDataURL(urlQr);
    this.docDefinition.content[6].columns[0] = {
      margin: [-10, -19, 0, 0],
      width: 130,
      image: text,
      height: 130,
      alignment: 'left'
    }
  }
}
