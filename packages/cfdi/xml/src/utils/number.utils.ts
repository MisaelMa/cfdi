export function stringObjToNumerico<T>(
  obj: Record<string, any>
): Record<string, any> {
  const resultado: T | Record<string, any> = {};

  for (const propiedad in obj) {
    if (obj.hasOwnProperty(propiedad)) {
      const valor = obj[propiedad];
      resultado[propiedad] =
        typeof valor === 'string' ? Number(valor) : valor;
    }
  }

  return resultado;
}
