import { NextApiRequest, NextApiResponse } from 'next';

import path from 'path';
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

const deleteProps = (objeto, props) => {
  props.forEach(element => {
    for (let o in objeto) {
      delete objeto[o][element];
    }
  });
};
export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const constancia = path.join(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    '..',
    '..',
    'files',
    'pdf',
    'csf.pdf'
  );
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
                if (diff < 50) {
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

  res.send({
    text: pdfData,
  });
}
