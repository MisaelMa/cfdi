import { CaracteristicaObraPieza, TiposDeBien, TituloAdquirido } from '@cfdi/xml/src/types/Complements/obrasarte/obrasarte.enum';

export interface XmlObrasarte {
    _attributes: XmlObrasarteAttributes;
}

export interface XmlObrasarteAttributes {
    Version: string
    TipoBien: TiposDeBien
    OtrosTipoBien?: string
    TituloAdquirido: TituloAdquirido
    OtrosTituloAdquirido?: string
    Subtotal?: string
    IVA?: string
    FechaAdquisicion: string
    CaracterísticasDeObraoPieza: CaracteristicaObraPieza
}
