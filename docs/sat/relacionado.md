# Relacionado
| Function  | Type | properties | Enum | Descripcion |
| :---: |:---:| :---:|  :---:|  :---:|
| Construtor | XmlRelacionadosAttributes |  TipoRelacion: string; | |  Inicializa la clase|
| addRelation | String |  uuid: string | | Agregar la Relacion|

```ts
import { Relacionado } from '@signati/core';

const relation = new Relacionado({ TipoRelacion: '01' });
      relation.addRelation('asdasd-3234-asdasd-2332-asdas');
      relation.addRelation('asdasd-3234-asdasd-2332-asdas');

await this.cfd.relacionados(relation);
```
