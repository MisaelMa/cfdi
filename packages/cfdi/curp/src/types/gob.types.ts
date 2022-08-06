export interface TypeFinde {
  tipoBusqueda: "datos" | "curp"
}
export interface WithData extends TypeFinde {
  claveEntidad: "QR"
  diaNacimiento: "17"
  fechaNacimiento: "17/10/1996"
  mesNacimiento: "10"
  nombres: "AMIR MISAEL"
  primerApellido: "MARIN"
  segundoApellido: "COH"
  selectedYear: "1996"
  sexo: "H"
}

export interface WithCurp extends TypeFinde {
  curp: string
}
