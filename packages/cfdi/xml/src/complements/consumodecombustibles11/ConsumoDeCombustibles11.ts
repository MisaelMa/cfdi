import {
  XmlCondCom11ConcepConsumoDeCombustibles,
  XmlCondCom11Conceptos,
  XmlCondComAttributes,
  XmlCondComConcepConsumDeCombusAttributes,
  XmlCondComDeterminadoAttributes,
  XmlConsumodecombustibles,
  ComplementsReturn,
} from '../../types';

/*
 *https://www.sat.gob.mx/consulta/41426/genera-facturas-electronicas-con-informacion-del-consumo-de-combustible-con-monedero-electronico
 */
/**
 *
 */
export class ConsumoDeCombustibles11 {
  private CondCom: XmlConsumodecombustibles = {} as XmlConsumodecombustibles;

  private xmlns = 'http://www.sat.gob.mx/ConsumoDeCombustibles11';

  private xmlnskey = 'consumodecombustibles11';

  private schemaLocation: string[] = [
    'http://www.sat.gob.mx/ConsumoDeCombustibles11',
    'http://www.sat.gob.mx/sitio_internet/cfd/ConsumoDeCombustibles/consumodeCombustibles11.xsd',
  ];

  /**
   *constructor
   *
   * @param attributes
   * XmlCondComAttributes
   */
  constructor(attributes: XmlCondComAttributes) {
    this.CondCom._attributes = attributes;
  }

  /**
   *Concepto
   *
   * @param concepto
   * XmlCondComConcepConsumDeCombusAttributes
   * @param determinados
   * XmlCondComDeterminadoAttributes
   */
  Concepto(
    concepto: XmlCondComConcepConsumDeCombusAttributes,
    determinados?: XmlCondComDeterminadoAttributes[]
  ): void {
    if (!this.CondCom['consumodecombustibles11:Conceptos']) {
      this.CondCom['consumodecombustibles11:Conceptos'] = {
        'consumodecombustibles11:ConceptoConsumoDeCombustibles': [],
      } as XmlCondCom11Conceptos;
    }
    const concept: XmlCondCom11ConcepConsumoDeCombustibles = {
      _attributes: concepto,
    };
    if (determinados && determinados.length > 0) {
      if (!concept['consumodecombustibles11:Determinados']) {
        concept['consumodecombustibles11:Determinados'] = {
          'consumodecombustibles11:Determinado': [],
        };
      }
      determinados.forEach((deter: XmlCondComDeterminadoAttributes) => {
        if (concept['consumodecombustibles11:Determinados']) {
          concept['consumodecombustibles11:Determinados'][
            'consumodecombustibles11:Determinado'
          ].push({ _attributes: deter });
        }
      });
      // for (const deter of determinados) {
      //   concept['consumodecombustibles11:Determinados'][
      //     'consumodecombustibles11:Determinado'
      //   ].push({ _attributes: deter });
      // }
    }
    this.CondCom['consumodecombustibles11:Conceptos'][
      'consumodecombustibles11:ConceptoConsumoDeCombustibles'
    ].push(concept);
  }

  /**
   *getComplement
   */
  public getComplement(): ComplementsReturn {
    return {
      complement: this.CondCom,
      key: 'consumodecombustibles11:ConsumoDeCombustibles',
      schemaLocation: this.schemaLocation,
      xmlns: this.xmlns,
      xmlnskey: this.xmlnskey,
    };
  }
}
