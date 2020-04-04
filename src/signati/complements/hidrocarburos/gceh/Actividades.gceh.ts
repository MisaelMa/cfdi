import {
    XmlEroAct,
    XmlEroActAttributes,
    XmlEroSubActAttributes, XmlEroSubActTaAttributes, XmlEroSubActTareas
} from '../../../types/Complements/hidrocarburos/gceh/gceh.com';

export class Actividades {
    private actividad: XmlEroAct = {} as XmlEroAct

    constructor(data: XmlEroActAttributes) {
        this.actividad._attributes = data;
    }

    subActividad(data: XmlEroSubActAttributes, tareas: XmlEroSubActTaAttributes[]) {
        if (!this.actividad['gceh:SubActividades']) {
            this.actividad['gceh:SubActividades'] = []
        }
        const tasks: XmlEroSubActTareas[] = [];

        for (const tarea of tareas) {
            tasks.push({
                _attributes: tarea
            })
        }
        this.actividad['gceh:SubActividades'].push({
            _attributes: data,
            'gceh:Tareas': tasks
        })
    }

    public getActividad() {
        return this.actividad
    }
}
