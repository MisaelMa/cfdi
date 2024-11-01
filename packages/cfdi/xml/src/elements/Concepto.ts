import {
  ComlementTypeConcept,
  ComplementProperties,
  XmlComplementsConcepts,
} from '@cfdi/complementos';
import {
  InformacionAduanera,
  XmlConceptParteAttributes,
  XmlConceptoAttributes,
  XmlConceptoProperties,
  XmlConceptoTercerosAttributes,
  XmlTranRentAttributesProperties,
} from '../types';

import { BaseImpuestos } from './BaseImpuestos';
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
    };
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
    Schema.of().concepto.terceros.validate(cuenta);
    this.concepto['cfdi:ACuentaTerceros'] = {
      _attributes: cuenta,
    };
    return this;
  }

  /**
   *predial
   *
   * @param cuenta
   *  string
   */
  predial(cuenta: string): Concepto {
    const pre = {
      Numero: cuenta,
    }
    Schema.of().concepto.predial.validate(pre);
    this.concepto['cfdi:CuentaPredial'] = {
      _attributes: pre
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
    const cloneParte = {
      ...parte,
      Cantidad: Number(parte.Cantidad),
      ValorUnitario: Number(parte.ValorUnitario),
      Importe: Number(parte.ValorUnitario),
    };

    Schema.of().concepto.parte.validate(cloneParte);
    this.concepto['cfdi:Parte'] = {
      _attributes: cloneParte,
    };
    return this;
  }

  private aduana(pedimento: string): InformacionAduanera {
    const InformacionAduanera = {
      NumeroPedimento: pedimento,
    };

    Schema.of().concepto.informacionAduanera.validate(InformacionAduanera);
    return {
      _attributes: InformacionAduanera,
    };
  }

  setParteInformacionAduanera(pedimento: string): Concepto {
    if (!this.concepto['cfdi:Parte']) {
      console.log('utilize primero parte');
      return this;
    }
    if (!this.concepto['cfdi:Parte']['cfdi:InformacionAduanera']) {
      this.concepto['cfdi:Parte']['cfdi:InformacionAduanera'] = [];
    }
    this.concepto['cfdi:Parte']['cfdi:InformacionAduanera'].push(
      this.aduana(pedimento)
    );
    return this;
  }

  /**
   *aduana
   *
   * @param pedimento
   * number | string
   */
  InformacionAduanera(pedimento: string): Concepto {
    if (!this.concepto['cfdi:InformacionAduanera']) {
      this.concepto['cfdi:InformacionAduanera'] = [];
    }

    this.concepto['cfdi:InformacionAduanera'].push(this.aduana(pedimento));
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
      ...payload
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
      //Importe: Number(payload.Importe),
    };
    //Schema.of().concepto.retencion.validate(retencion);

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
