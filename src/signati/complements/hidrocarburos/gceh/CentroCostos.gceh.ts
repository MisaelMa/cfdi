import {
    XmlEroCenCost,
    XmlEroCenCostAttributes,
    XmlEroCenCostYacAttributes, XmlEroCenCostYaciPoAttributes, XmlEroCenCostYaciPozos, XmlEroSubActTareas
} from '../../../types/Complements/hidrocarburos/gceh/gceh.com';

export class CentroCostos {
    private cenCost: XmlEroCenCost = {} as XmlEroCenCost

    constructor(data: XmlEroCenCostAttributes) {
        this.cenCost._attributes = data;
    }

    public yacimiento(data: XmlEroCenCostYacAttributes, pozos: XmlEroCenCostYaciPoAttributes[]) {
        if (!this.cenCost['gceh:Yacimientos']) {
            this.cenCost['gceh:Yacimientos'] = []
        }

        const pozosY: XmlEroCenCostYaciPozos[] = [];

        for (const pozo of pozos) {
            pozosY.push({
                _attributes: pozo
            })
        }

        this.cenCost['gceh:Yacimientos'].push({
            _attributes: data,
            'gceh:Pozos': pozosY
        })
    }

    public getCenCosto() {
        return this.cenCost
    }
}
