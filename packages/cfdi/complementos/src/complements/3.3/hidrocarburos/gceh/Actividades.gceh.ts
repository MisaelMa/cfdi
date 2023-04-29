import {
  XmlEroAct,
  XmlEroActAttributes,
  XmlEroSubActAttributes,
  XmlEroSubActTaAttributes,
  XmlEroSubActTareas,
} from '../../../../types/complements/hidrocarburos/gceh/gceh.com';

/**
 *Actividades
 */
export class Actividades {
  private actividad: XmlEroAct = {} as XmlEroAct;

  /**
   *constructor
   *
   * @param data
   * XmlEroActAttributes
   */
  constructor(data: XmlEroActAttributes) {
    this.actividad._attributes = data;
  }

  /**
   *subActividad
   *
   * @param data
   * XmlEroSubActAttributes
   * @param tareas
   * XmlEroSubActTaAttributes
   */
  subActividad(
    data: XmlEroSubActAttributes,
    tareas: XmlEroSubActTaAttributes[]
  ): void {
    if (!this.actividad['gceh:SubActividades']) {
      this.actividad['gceh:SubActividades'] = [];
    }
    const tasks: XmlEroSubActTareas[] = [];

    tareas.forEach((task) => {
      tasks.push({
        _attributes: task,
      });
    });
    // for (const tarea of tareas) {
    //   tasks.push({
    //     _attributes: tarea,
    //   });
    // }
    this.actividad['gceh:SubActividades'].push({
      _attributes: data,
      'gceh:Tareas': tasks,
    });
  }

  /**
   *getActividad
   */
  public getActividad(): XmlEroAct {
    return this.actividad;
  }
}
