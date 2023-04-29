import {
  XmlEroCenCost,
  XmlEroCenCostAttributes,
  XmlEroCenCostYacAttributes,
  XmlEroCenCostYaciPoAttributes,
  XmlEroCenCostYaciPozos,
} from '../../../../types/complements/hidrocarburos/gceh/gceh.com';

/**
 *
 */
export class CentroCostos {
  private cenCost: XmlEroCenCost = {} as XmlEroCenCost;

  /**
   *constructor
   *
   * @param data
   */
  constructor(data: XmlEroCenCostAttributes) {
    this.cenCost._attributes = data;
  }

  /**
   *yacimiento
   *
   * @param data
   * XmlEroCenCostYacAttributes
   * @param pozos
   * XmlEroCenCostYaciPoAttributes
   */
  public yacimiento(
    data: XmlEroCenCostYacAttributes,
    pozos: XmlEroCenCostYaciPoAttributes[]
  ): void {
    if (!this.cenCost['gceh:Yacimientos']) {
      this.cenCost['gceh:Yacimientos'] = [];
    }

    const pozosY: XmlEroCenCostYaciPozos[] = [];

    pozos.forEach((pozo) => {
      pozosY.push({
        _attributes: pozo,
      });
    });
    // for (const pozo of pozos) {
    //   pozosY.push({
    //     _attributes: pozo,
    //   });
    // }

    this.cenCost['gceh:Yacimientos'].push({
      _attributes: data,
      'gceh:Pozos': pozosY,
    });
  }

  /**
   *getCenCosto
   */
  public getCenCosto(): XmlEroCenCost {
    return this.cenCost;
  }
}
