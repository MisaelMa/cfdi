import {
  ComlementTypeConcept,
  ComplementProperties,
  XmlComplementsConcepts,
} from '@cfdi/complementos';
import {
  XmlConceptParteAttributes,
  XmlConceptoAttributes,
  XmlConceptoProperties,
  XmlConceptoTercerosAttributes,
  XmlTranRentAttributesProperties,
} from '../types';

import { BaseImpuestos } from './BaseImpuestos';
import { Impuestos } from './Impuestos';
import { Schema } from '@cfdi/xsd';

/**
 *
 */
export class Concepto extends BaseImpuestos {
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

  /**
   *constructor
   *
   * @param concepto
   * XmlConceptoAttributes
   */
  constructor(concepto: XmlConceptoAttributes) {
    super();
    const cloneConcept = {
      ...concepto,
      Cantidad: Number(concepto.Cantidad),
      ValorUnitario: Number(concepto.ValorUnitario),
      Importe: Number(concepto.ValorUnitario),
    };
    if (concepto.Descuento) {
      cloneConcept.Descuento = Number(concepto.Descuento);
    }
    this.existComplemnt = false;
    Schema.of().concepto.concepto.validate(cloneConcept);
    this.concepto._attributes = cloneConcept;
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
    const { complement, key, schemaLocation, xmlns, xmlnskey } =
      data.getComplement();
    this.complementProperties.key = key;
    this.complementProperties.xmlns = xmlns;
    this.complementProperties.xmlnskey = xmlnskey;
    this.complementProperties.schemaLocation = schemaLocation;
    this.concepto['cfdi:ComplementoConcepto'][key] = complement;
  }

  /**
   *terceros
   *
   * @param cuenta
   * XmlConceptoTercerosAttributes
   */
  terceros(cuenta: XmlConceptoTercerosAttributes): Concepto {
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
  predial(cuenta: number | string): Concepto {
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
  parte(parte: XmlConceptParteAttributes): Concepto {
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
  aduana(pedimento: number | string): Concepto {
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
    payload: XmlTranRentAttributesProperties & { Base: string | number }
  ): Concepto {
    const traslado = {
      ...payload,
      TasaOCuota: Number(payload.TasaOCuota),
      Importe: Number(payload.Importe),
    };
    Schema.of().concepto.traslado.validate(traslado);
    this.setTraslado(traslado);
    this.concepto['cfdi:Impuestos'] = this.impuesto;
    return this;
  }

  /**
   *retencion
   *
   * @param retencion
   * XmlTranRentAttributesProperties
   */
  retencion(
    payload: XmlTranRentAttributesProperties & {
      Base: string | number;
      TasaOCuota: string | number;
      Importe: string | number;
    }
  ): Concepto {
    const retencion = {
      ...payload,
      Importe: Number(payload.Importe),
    };
    Schema.of().concepto.retencion.validate(retencion);

    this.setRetencion(retencion);
    this.concepto['cfdi:Impuestos'] = this.impuesto;
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
