import { XmlConceptoAttributes, XmlConceptoProperties } from '../Interface/Tags/concepts.interface';
import { Impuestos } from './Impuestos';
import { XmlTranRentAttributesProperties } from '../Interface/Tags/impuestos.interface';
import { XmlComplementsConcepts } from '../Interface/Tags/complements.interface';

export class Concepts {

  public concepto: XmlConceptoProperties = {} as XmlConceptoProperties;
  private impuesto: Impuestos = new Impuestos();

  /**
   * @param {Object} concepto
   * @param {String} concepto.ClaveProdServ
   * @param {String} concepto.ClaveUnidad
   * @param {String} concepto.NoIdentificacion
   * @param {String} concepto.Cantidad
   * @param {String} concepto.Unidad
   * @param {String} concepto.Descripcion
   * @param {String} concepto.ValorUnitario
   * @param {String} concepto.Importe
   * @param {String} concepto.Descuento
   * @param {Object} concepto.Impuestos
   * @param {Object[]} concepto.Impuestos.Traslados
   * @param {Object[]} concepto.Impuestos.Retenciones
   * @param {String} concepto.Impuestos.Traslados.Base
   * @param {String} concepto.Impuestos.Traslados.Impuesto
   * @param {String} concepto.Impuestos.Traslados.TipoFactor
   * @param {String} concepto.Impuestos.Traslados.TasaOCuota
   * @param {String} concepto.Impuestos.Traslados.Importe
   * @param {String} concepto.Impuestos.Retenciones.Base
   * @param {String} concepto.Impuestos.Retenciones.Impuesto
   * @param {String} concepto.Impuestos.Retenciones.TipoFactor
   * @param {String} concepto.Impuestos.Retenciones.TasaOCuota
   * @param {String} concepto.Impuestos.Retenciones.Importe
   */
  constructor(concepto: XmlConceptoAttributes) {
    this.concepto._attributes = concepto;
  }

  public async addComplent(data: XmlComplementsConcepts) {
    if (!this.concepto['cfdi:ComplementoConcepto']) {
      this.concepto['cfdi:ComplementoConcepto'] = {} as XmlComplementsConcepts;
    }
    for (const key in data) {
      if (data.hasOwnProperty.call(data, key)) {
        this.concepto['cfdi:ComplementoConcepto'][key] = data[key];
      }
    }
  }

  /**
   * @param {Object} traslado
   * @param {String} traslado.Base
   * @param {String} traslado.Impuesto
   * @param {String} traslado.TipoFactor
   * @param {String} traslado.TasaOCuota
   * @param {String} traslado.Importe
   */
  traslado(traslado: XmlTranRentAttributesProperties) {
    this.concepto['cfdi:Impuestos'] = this.impuesto.traslados(traslado).impuesto; // = traslado;
    return this;
  }

  /**
   * @param {Object} retencion
   * @param {String} retencion.Base
   * @param {String} retencion.Impuesto
   * @param {String} retencion.TipoFactor
   * @param {String} retencion.TasaOCuota
   * @param {String} retencion.Importe
   */
  retencion(retencion: XmlTranRentAttributesProperties) {
    this.concepto['cfdi:Impuestos'] = this.impuesto.retenciones(retencion).impuesto; // = traslado;
    return this;
  }

  getConcept(): XmlConceptoProperties {
    return this.concepto;
    // pushConcepto(cfdi.jxml, this.concepto);
  }
}
