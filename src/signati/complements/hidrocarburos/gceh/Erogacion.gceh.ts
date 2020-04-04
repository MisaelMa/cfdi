import {
    XmlEroDocRelaAttributes,
    XmlGcehErogacion,
    XmlGcehErogacionAttributes
} from '../../../types/Complements/hidrocarburos/gceh/gceh.com';
import { Actividades } from './Actividades.gceh';
import { CentroCostos } from './CentroCostos.gceh';

export class Erogacion {
    private erogacion: XmlGcehErogacion = {} as XmlGcehErogacion

    constructor(data: XmlGcehErogacionAttributes) {
        this.erogacion._attributes = data
    }

    public documentoRelacionado(data: XmlEroDocRelaAttributes) {
        if (!this.erogacion['gceh:DocumentoRelacionado']) {
            this.erogacion['gceh:DocumentoRelacionado'] = []
        }
        this.erogacion['gceh:DocumentoRelacionado'].push({
            _attributes: data
        })
    }

    public actividad(act: Actividades) {
        if (!this.erogacion['gceh:Actividades']) {
            this.erogacion['gceh:Actividades'] = []
        }
        this.erogacion['gceh:Actividades'].push(act.getActividad())
    }

    public centroCostos(cen: CentroCostos) {
        if (!this.erogacion['gceh:CentroCostos']) {
            this.erogacion['gceh:CentroCostos'] = []
        }
        this.erogacion['gceh:CentroCostos'].push(cen.getCenCosto())
    }

    public getErogacion() {
        return this.erogacion
    }
}
