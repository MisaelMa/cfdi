import { XmlIedu, XmlIeduAttribute } from '../../Interface/Complements/iedu.interface';
import { XmlComplementsConcepts } from '../../Interface/Tags/complements.interface';

export class Iedu {
  public iued: XmlComplementsConcepts = {} as XmlComplementsConcepts;

  constructor(attributes: XmlIeduAttribute) {
    this.iued['iedu:instEducativas'] = {
      _attributes: attributes,
    } as XmlIedu;
  }
}
