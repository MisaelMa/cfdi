import {ElementCompact} from "xml-js";

export class CFDI {
    private xml: ElementCompact;

    constructor() {
        this.xml = {};
    }
    setReceiver(receiver: any) {
        return receiver;
    }
    setConcepts(concepts: any[]) {
        return concepts;
    }
    setIssuing(issuing: any) {
        return issuing;
    }

}
// NOtificaciones
// extra net
// api
// proceso de venta
