import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { logo } from '@cfdi/utils';
export const A117SKELETON: TDocumentDefinitions | any = {
  pageSize: 'A4',
  pageMargins: [20, 25, 20, 25],
  content: [
    {
      columns: [
        {
          text: 'logo',
        },
        {
          width: 40,
          text: '',
        },
        {
          margin: [0, 0, 0, 0],
          width: 200,
          text: [
            {
              text: '\n',
              style: {
                bold: true,
                color: '#a76d09',
              },
            },
            {
              text: [
                {
                  text: 'R.F.C: ',
                  style: {
                    bold: true,
                    color: '#a76d09',
                  },
                },
                { text: '\n' },
              ],
            },
            {
              text: [
                {
                  text: 'REGIMEN: ',
                  style: {
                    bold: true,
                    color: '#a76d09',
                  },
                },
                { text: '\n' },
              ],
            },
            {
              text: [
                {
                  text: 'LUGAR DE EXPEDICION: ',
                  style: {
                    bold: true,
                    color: '#a76d09',
                  },
                },
                { text: '\n' },
              ],
            },
          ],
          style: {
            fontSize: 9,
          },
        },
        [
          {
            alignment: 'center',
            margin: [55, 0, 0, 0],
            text: 'FACTURA',
            style: {
              fontSize: 9,
              bold: true,
            },
          },
          {
            margin: [80, 0, 0, 10],
            alignment: 'center',
            width: [10],
            table: {
              alignment: 'right',
              body: [
                [
                  {
                    text: 'FOLIO',
                    style: {
                      bold: true,
                      fontSize: 9,
                      alignment: 'center',
                      margin: [0, 0, 0, 0],
                    },
                  },
                ],
              ],
            },
            layout: {
              // @ts-ignore
              paddingLeft: (i: any, node: any) => {
                return 20;
              },
              // @ts-ignore
              paddingRight: (i: any, node: any) => {
                return 20;
              },
              // @ts-ignore
              paddingTop: (i: any, node: any) => {
                return 0;
              },
              // @ts-ignore
              paddingBottom: (i: any, node: any) => {
                return 0;
              },
              // @ts-ignore
              fillColor: (rowIndex: number, node: any, columnIndex: any) => {
                return rowIndex === 0 ? '#eeeeee' : null;
              },
            },
          },
          {
            alignment: 'center',
            margin: [80, 0, 0, 0],
            table: {
              alignment: 'right',
              heights: 10,
              body: [
                [
                  {
                    text: 'FECHA',
                    style: {
                      bold: true,
                      fontSize: 9,
                      alignment: 'center',
                      margin: [0, 0, 0, 0],
                    },
                  },
                ],
              ],
            },
            layout: {
              // @ts-ignore
              paddingTop: (i: any, node: any) => {
                return 0;
              },
              // @ts-ignore
              paddingBottom: (i: any, node: any) => {
                return 0;
              },
              // @ts-ignore
              fillColor: (rowIndex: number, node: any, columnIndex: any) => {
                return rowIndex === 0 ? '#eeeeee' : null;
              },
            },
          },
        ],
      ],
    },
    {
      bold: true,
      margin: [0, 20, 0, 10],
      text: [
        {
          text: 'Datos del Cliente\n',
          style: {
            color: '#0941a7',
          },
        },
        {
          text: 'Razon Social: ',
          style: {
            bold: true,
            color: '#a76d09',
          },
        },
        { text: '' },
        {
          text: 'R.F.C.: ',
          style: {
            bold: true,
            color: '#a76d09',
          },
        },
        { text: '' },
        {
          text: 'Uso CFDI: ',
          style: {
            bold: true,
            color: '#a76d09',
          },
        },
        { text: '' },
      ],
      style: {
        fontSize: 10,
      },
    },
    {
      style: {
        fontSize: 9,
      },
      table: {
        widths: [45, 50, 213, 40, 50, 53, 40],
        body: [
          [
            {
              text: 'CANTIDAD',
              style: {
                bold: true,
              },
            },
            {
              text: 'CLAVE SAT',
              style: {
                bold: true,
              },
            },
            {
              text: 'CONCEPTO/DESCRIPCIÓN',
              alignment: 'center',
              style: {
                bold: true,
              },
            },
            {
              text: 'UNIDAD',
              style: {
                bold: true,
              },
            },
            {
              text: 'P.UNITARIO',
              style: {
                bold: true,
              },
            },
            {
              text: 'DESCUENTO',
              style: {
                bold: true,
              },
            },
            {
              text: 'IMPORTE',
              style: {
                bold: true,
              },
            },
          ],
        ],
      },
      layout: {
        // @ts-ignore
        fillColor: (rowIndex: number, node: any, columnIndex: any) => {
          return rowIndex === 0 ? '#eeeeee' : null;
        },
      },
    },
    {
      margin: [0, 7, 0, 7],
      table: {
        widths: ['*', 'auto'],
        body: [
          [
            {
              stack: [
                {
                  text: 'CANTIDAD CON LETRA',
                  style: {
                    bold: true,
                    fontSize: 9,
                  },
                },
                {
                  text: 'OCHOCIENTOS TREINTA Y NUEVE PESOS 99/100 M.N.',
                  style: {
                    fontSize: 9,
                  },
                },
              ],
            },
            {
              text: [
                {
                  text: 'SUBTOTAL: ',
                  style: {
                    bold: true,
                    color: '#a76d09',
                  },
                },
                { text: '\n' },
                {
                  text: 'DESCUENTO: ',
                  style: {
                    bold: true,
                    color: '#a76d09',
                  },
                },
                { text: '$\n' },
                {
                  text: 'IMPUESTOS: ',
                  style: {
                    bold: true,
                    color: '#a76d09',
                  },
                },
                { text: '$\n' },
                {
                  text: 'TOTAL: ',
                  style: {
                    bold: true,
                    color: '#a76d09',
                  },
                },
                { text: '$' },
              ],
              style: {
                fontSize: 9,
              },
            },
          ],
        ],
      },
    },
    {
      columns: [
        {
          text: [
            {
              text: 'Forma de pago: ',
              style: {
                bold: true,
                color: '#a76d09',
              },
            },
            { text: ' \n' },
            {
              text: 'Método de pago: ',
              style: {
                bold: true,
                color: '#a76d09',
              },
            },
            { text: ' \n' },
            {
              text: 'No. de cuenta: ',
              style: {
                bold: true,
                color: '#a76d09',
              },
            },
            { text: ' \n' },
          ],
          style: {
            fontSize: 9,
          },
        },
        {
          text: [
            {
              text: 'Moneda: ',
              style: {
                bold: true,
                color: '#a76d09',
              },
            },
            { text: ' $ 1034.48\n' },
            {
              text: 'Tipo de comprobante: ',
              style: {
                bold: true,
                color: '#a76d09',
              },
            },
            { text: ' $ 310.35\n' },
          ],
          style: {
            fontSize: 9,
          },
        },
      ],
    },
    {
      style: {
        fontSize: 9,
      },
      table: {
        widths: [250, 280],
        body: [
          [
            {
              border: [false, false, false, false],
              text: 'No. CSD del Emisor',
              alignment: 'center',
              style: {
                bold: true,
              },
            },
            {
              border: [false, false, false, false],
              text: 'Fecha y hora de certificacion',
              alignment: 'center',
              style: {
                bold: true,
              },
            },
          ],
          [
            {
              border: [false, true, false, false],
              text: ' ',
              alignment: 'center',
            },
            {
              border: [false, true, false, false],
              text: '',
              alignment: 'center',
            },
          ],
          [
            {
              border: [false, false, false, false],
              text: 'Folio Fiscal',
              alignment: 'center',
              style: {
                bold: true,
              },
            },
            {
              border: [false, false, false, false],
              text: 'No. CSD del SAT',
              alignment: 'center',
              style: {
                bold: true,
              },
            },
          ],
          [
            {
              border: [false, true, false, false],
              text: '',
              alignment: 'center',
            },
            {
              border: [false, true, false, false],
              text: '',
              alignment: 'center',
            },
          ],
        ],
      },
    },
    {
      margin: [0, 25, 0, 0],
      style: {
        fontSize: 9,
      },
      columns: [
        {
          text: '',
        },
        {
          margin: [-10, -15, 0, 0],
          table: {
            widths: [418],
            body: [
              [
                {
                  border: [false, false, false, false],
                  text: 'SELLO DIGITAL DEL EMISOR',
                  style: {
                    alignment: 'left',
                    color: '#0941a7',
                  },
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  text: '',
                  style: {
                    fontSize: 7,
                  },
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  text: 'SELLO DEL SAT',
                  style: {
                    alignment: 'left',
                    color: '#0941a7',
                  },
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  text: '',
                  style: {
                    fontSize: 7,
                  },
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  text: 'CADENA ORIGINAL DEL COMPLEMENTO DE CERTIFICACION DIGITAL DEL SAT',
                  style: {
                    alignment: 'left',
                    color: '#0941a7',
                  },
                },
              ],
              [
                {
                  border: [false, false, false, false],
                  text: '',
                  style: {
                    fontSize: 7,
                  },
                },
              ],
            ],
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  ],
  // @ts-ignore
  footer: (currentPage: number, pageCount: number) => {
    return {
      table: {
        body: [
          [
            {
              image: logo,
              margin: [10, 0, 0, 0],
              alignment: 'center',
              fit: [20, 20],
            },
            {
              margin: [-5, 5, 0, 0],
              text: 'by Signati',
              // stext: "Page " + currentPage.toString() + ' of ' + pageCount,
              alignment: 'right',
              style: {
                fontSize: 10,
              },
            },
          ],
        ],
      },
      layout: 'noBorders',
    };
  },
};
