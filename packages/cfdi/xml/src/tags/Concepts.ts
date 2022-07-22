import {
  XmlConceptoAttributes,
  XmlConceptoProperties,
  XmlConceptoTercerosAttributes,
  XmlConceptParteAttributes,
} from '../types/Tags/concepts.interface';
import { XmlTranRentAttributesProperties } from '../types/Tags/impuestos.interface';
import {
  ComlementTypeConcept,
  ComplementProperties,
  XmlComplementsConcepts,
} from '../types/Tags/complements.interface';

import { Impuestos } from './Impuestos';

/**
 *
 */
export class Concepts {
  // private conceptComplemnets: any = [
  //   {
  //     key: 'aerolineas:Aerolineas',
  //     schemaLocation: [
  //       'http://www.sat.gob.mx/terceros',
  //       'http://www.sat.gob.mx/sitio_internet/cfd/terceros/terceros11.xsd',
  //     ],
  //     xmlns: 'http://www.sat.gob.mx/terceros',
  //     xmlnskey: 'terceros',
  //   },
  //   {
  //     key: 'ventavehiculos:VentaVehiculos',
  //     schemaLocation: [
  //       'http://www.sat.gob.mx/ventavehiculos',
  //       'http://www.sat.gob.mx/sitio_internet/cfd/ventavehiculos/ventavehiculos11.xsd',
  //     ],
  //     xmlns: 'http://www.sat.gob.mx/ventavehiculos',
  //     xmlnskey: 'ventavehiculos',
  //   },
  // ];

  private existComplemnt = false;

  private complementProperties: ComplementProperties =
    {} as ComplementProperties;

  private concepto: XmlConceptoProperties = {} as XmlConceptoProperties;

  private impuesto: Impuestos = new Impuestos();

  /**
   *constructor
   *
   * @param concepto
   * XmlConceptoAttributes
   */
  constructor(concepto: XmlConceptoAttributes) {
    this.existComplemnt = false;
    this.concepto._attributes = concepto;
  }

  /**
   *complemento
   *
   * @param data
   * ComlementTypeConcept
   */
  public complemento(data: ComlementTypeConcept): void {
    if (!this.concepto['cfdi:ComplementoConcepto']) {
      this.concepto['cfdi:ComplementoConcepto'] = {} as XmlComplementsConcepts;
    }
    this.existComplemnt = true;
    this.complementProperties.key = data.getComplement().key;
    this.complementProperties.xmlns = data.getComplement().xmlns;
    this.complementProperties.xmlnskey = data.getComplement().xmlnskey;
    this.complementProperties.schemaLocation =
      data.getComplement().schemaLocation;
    this.concepto['cfdi:ComplementoConcepto'][data.getComplement().key] =
      data.getComplement().complement;
  }

  /**
   *terceros
   *
   * @param cuenta
   * XmlConceptoTercerosAttributes
   */
  terceros(cuenta: XmlConceptoTercerosAttributes): Concepts {
    this.concepto['cfdi:ACuentaTerceros'] = {
      _attributes: cuenta,
    };
    return this;
  }

  /**
   *predial
   *
   * @param cuenta
   * number | string
   */
  predial(cuenta: number | string): Concepts {
    this.concepto['cfdi:CuentaPredial'] = {
      _attributes: {
        Numero: cuenta,
      },
    };
    return this;
  }

  /**
   *parte
   *
   * @param parte
   * XmlConceptParteAttributes
   */
  parte(parte: XmlConceptParteAttributes): Concepts {
    this.concepto['cfdi:Parte'] = {
      _attributes: parte,
    };
    return this;
  }

  /**
   *aduana
   *
   * @param pedimento
   * number | string
   */
  aduana(pedimento: number | string): Concepts {
    this.concepto['cfdi:InformacionAduanera'] = {
      _attributes: {
        NumeroPedimento: pedimento,
      },
    };
    return this;
  }

  /**
   *traslado
   *
   * @param traslado
   * XmlTranRentAttributesProperties
   */
  traslado(
    traslado: XmlTranRentAttributesProperties & { Base: string | number }
  ): Concepts {
    this.concepto['cfdi:Impuestos'] =
      this.impuesto.traslados(traslado).impuesto; // = traslado;
    return this;
  }

  /**
   *retencion
   *
   * @param retencion
   * XmlTranRentAttributesProperties
   */
  retencion(
    retencion: XmlTranRentAttributesProperties & {
      Base: string | number;
      TasaOCuota: string | number;
      Importe: string | number;
    }
  ): Concepts {
    this.concepto['cfdi:Impuestos'] =
      this.impuesto.retenciones(retencion).impuesto; // = traslado;
    return this;
  }

  /**
   *getConcept
   */
  getConcept(): XmlConceptoProperties {
    const concept = { ...this.concepto };
    this.concepto = {} as XmlConceptoProperties;
    // console.log(this.concepto)
    return concept;
  }

  /**
   *isComplement
   */
  isComplement(): boolean {
    return this.existComplemnt;
  }

  /**
   *getComplementProperties
   */
  getComplementProperties(): ComplementProperties {
    return this.complementProperties;
  }
}
