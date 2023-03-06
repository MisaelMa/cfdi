import pdfParse from 'pdf-parse';
import { readFileSync } from 'fs';

const agruparSegun = (array: any[], groupBy: string, newProp: string) => {
  const objeto = array.reduce((groups, item) => {
    return {
      ...groups,
      [item[groupBy]]: groups[item[groupBy]]
        ? { ...item, [newProp]: [...groups[item[groupBy]][newProp], item] }
        : { ...item, [newProp]: [item] },
    };
  }, {});
  deleteProps(objeto, Object.keys(array[0] ? array[0] : []));
  return Object.keys(objeto).map(x => objeto[x]);
};

const deleteProps = (objeto: any, props: any) => {
  props.forEach((element: any) => {
    for (let o in objeto) {
      delete objeto[o][element];
    }
  });
};

const pagerender = (pageData: any) => {
  let render_options = {
    //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
    normalizeWhitespace: false,
    //do not attempt to combine same line TextItem's. The default value is `false`.
    disableCombineTextItems: false,
  };

  return pageData.getTextContent(render_options).then((textContent: any) => {
    return `,${JSON.stringify(textContent)}`;
  });
};

const findIndex = (data: any[],world: string)=>{
  return data.findIndex((item)=>item.includes(world));
}

const findIndexSplit = (data: any[],world: string)=>{
  const text = data.find((item)=>item.includes(world));
  if (text){
    return text.split(':')[1].replace(' ','')
  }
  return ''
}

const buildObj = (data:any[])=>{
  const cif =  data.find((item)=>item.includes('idCIF:'));
  const rfcIndex =  findIndex(data,'RFC:');
  const curpIndex =  findIndex(data,'CURP:');
  const nombreIndex = findIndex(data,'Nombre (s):');
  const paIndex = findIndex(data,'Primer Apellido:');
  const saIndex = findIndex(data,'Segundo Apellido:');
  const fioIndex = findIndex(data,'Fecha inicio de operaciones:');
  const padronIndex = findIndex(data,'padrón:');
  const fucsIndex = findIndex(data,'estado:');
  const ncIndex = findIndex(data,'Comercial:');

  const rfc = data[rfcIndex+1]
  return {
    "id_cif": cif ? cif.split(':')[1].replace(' ',''):"",
    "rfc": rfc,
    "curp":data[curpIndex+1],
    "nombre": data[nombreIndex+1],
    primer_apellido: data[paIndex+1],
    segundo_apellido: data[saIndex+1],
    fecha_inicio_de_operaciones: data[fioIndex+1],
    estatus_en_el_padrón: data[padronIndex+1],
    fecha_de_último_cambio_de_estado: data[fucsIndex+1],
    nombre_comercial: data[ncIndex+1],
    cp:findIndexSplit(data,'Postal:'),
    tipo_de_vialidad:findIndexSplit(data,'Tipo de Vialidad:'),
    nombre_de_vialidad:findIndexSplit(data,'Nombre de Vialidad:'),
    numero_exterior:findIndexSplit(data,'Exterior:'),
    numero_interior:findIndexSplit(data,'Interior:'),
    nombre_de_la_colonia:findIndexSplit(data,'Colonia:'),
    nombre_de_la_localidad:findIndexSplit(data,'Localidad:'),
    // Nombre del Municipio o Demarcación Territorial
    nombre_del_municipio: findIndexSplit(data,'Territorial:'),
    nombre_de_la_entidad_federativa:findIndexSplit(data,'Federativa:'),
    entre_calle:findIndexSplit(data,'Entre Calle:'),
    y_calle:findIndexSplit(data,'Y Calle:'),
    regimen:data[58] ? data[58]:'',
  }
}

export const csf = async (constancia: string, onlyData = false) => {
  const data = await pdfParse(readFileSync(constancia), { pagerender });
  const datax = JSON.parse(
    `[${data.text.replace(/(?:\r\n|\r|\n)/g, '').replace(',', '')}]`
  );

  const pdfData = datax.map((item: any, index: number) => {
    const items = item.items.map((data: any) => {
      const { transform, fontName, ...more } = data;
      return {
        ...more,
        line1: transform[4],
        line2: transform[5].toFixed(2),
      };
    });
    return {
      page: index + 1,
      items: agruparSegun(items, 'line2', 'items')
        .map(gr => {
          //return gr.items;
          if (gr.items.length > 0) {
            const text = [];
            let currentIndex = 0;
            for (let index = 0; index < gr.items.length; index++) {
              const item = gr.items[index];
              if (index > 0) {
                const last = gr.items[index - 1];
                const diff = item.line1 - last.line1;
                if (diff < 60) {
                  text.splice(
                    currentIndex,
                    1,
                    `${text[currentIndex]} ${item.str}`
                  );
                } else {
                  currentIndex++;
                  text.push(item.str);
                }
              } else {
                text.push(item.str);
              }
            }
            return text;
          } else {
            return 'error';
          }
        })
        .reduce((flatt: string[], element) => {
          return flatt.concat(element);
        }, [])
        .filter((text: string) => !['Página  ['].find(rg => text.includes(rg))),
    };
  });
  const flat = pdfData.reduce((flatt: string[], element:any) => {
    return flatt.concat(element.items);
  }, [])
  if (onlyData){
    return flat
  }
  return buildObj(flat);
};

export default csf;
