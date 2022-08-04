import { TDocumentDefinitions } from "pdfmake/interfaces";
import { XmlCdfi } from "@signati/core";
import { XmlToJson } from "@cfdi/utils";
import { logo } from '@cfdi/utils/src/Logo';
import { createPdf, TCreatedPdf } from "pdfmake/build/pdfmake";


export class A111 {
  private xml: XmlCdfi;
  private docDefinition: TDocumentDefinitions = {
    pageSize: 'A4',
    pageMargins: [20, 25, 20, 25],
    content: [

      {
        text: [
          {
            fontSize: 13,
            text: '\nORDEN DE COMPRA ',

          },

        ]
      },

      {

        columns: [

          {
            width: 200,
            text: [



              {
                text: [
                  {
                    text: '\n\nSolicitante:',
                    style: {
                      bold: true,
                      fontSize: 10,
                    }
                  },
                  { text: ' Sistemas\n', fontSize: 10, }
                ]
              },
              {
                text: [
                  {
                    text: 'Proveedor:',
                    style: {
                      bold: true,
                      fontSize: 10,
                    }
                  },
                  { text: ' Coppel\n', fontSize: 10, }
                ]
              },
              {
                text: [
                  {
                    text: 'Empresa:',
                    style: {
                      bold: true,
                      fontSize: 10,
                    }
                  },
                  { text: ' Adriana Salvador Jeronimo\n', fontSize: 10, }
                ]
              },


            ]
          },
          {
            width: 250,
            text: [

              {
                text: [


                ]
              },
              {
                text: [
                  {
                    text: '\n\nArticulos Solicitados:',
                    style: {
                      bold: true,
                      fontSize: 10,
                    }
                  },
                  { text: ' 1\n', fontSize: 10, }
                ]
              },
              {
                text: [
                  {
                    text: 'Fecha de Pedido:',
                    style: {
                      bold: true,
                      fontSize: 10,
                    }
                  },
                  { text: '06/07/2020\n', fontSize: 10, }
                ]
              },
              {
                text: [
                  {
                    text: 'Fecha de Llegada:',
                    style: {
                      bold: true,
                      fontSize: 10,
                    }
                  },
                  { text: ' 06/07/2020\n', fontSize: 10, }
                ]
              },


            ]
          },
          {
            width: 150,
            style: 'tableExample',
            table: {

              headerRows: 1,
              body: [

                [{ text: 'Folio', fillColor: '#dddddd', border: [true, true, true, true] }],
                ['109209437',]
              ]
            }
          },

        ]
      },

      {
        style: 'tableExample',
        table: {
          widths: [40, 153, 50, 80, 60, 50, 50],
          headerRows: 1,
          body: [

            [{ text: 'N°', fillColor: '#dddddd', border: [true, true, true, true] }, { text: 'Concepto/Descricion', style: 'tableHeader', fillColor: '#dddddd', border: [true, true, true, true] }, { text: 'C.pedida', style: 'tableHeader', fillColor: '#dddddd', border: [true, true, true, true] }, { text: 'Unidad', style: 'tableHeader', fillColor: '#dddddd', border: [true, true, true, true] }, { text: 'C.Recibida', style: 'tableHeader', fillColor: '#dddddd', border: [true, true, true, true] }, { text: 'Precio', style: 'tableHeader', fillColor: '#dddddd', border: [true, true, true, true] }, { text: 'Valor', fillColor: '#dddddd', border: [true, true, true, true] }],
            ['1', 'cat', 'nomina', 'servicio', '19891', '090', '090'],


          ]
        },


      },
      {

        style: 'tableExample',
        table: {

          widths: [548],

          body: [
            [
              {
                border: [false, false, false, true],
                alignment: 'center',
                text: [
                  {
                    border: [false, false, true, false],
                    linecolors: '#000080',
                    style: { fontSize: 10, bold: true, color: '#a76d09' },
                    text: ' ',
                  },
                  {
                    border: [false, false, false, false],
                    fontSize: 10,
                    text: '\n  '
                  },
                  {
                    border: [false, false, false, false],
                    linecolors: '#000080',
                    style: { fontSize: 10, bold: true, color: '#a76d09' },
                    text: ''
                  },
                  {
                    border: [false, false, false, false],
                    fontSize: 10,
                    text: '\n\n\n\n  '
                  },
                ]
              }
            ]
          ]
        }
      },

      {


        style: 'tableExample',
        table: {

          widths: [290, 250],
          body: [
            [
              {
                border: [false, false, false, false],
                text: [

                  {
                    alignment: 'left',
                    text: 'AUTORIZADO POR (Nombre y Firma) ',
                    style: {
                      bold: true,

                    }
                  },



                ]
              },
              {
                border: [false, false, false, false],
                text: [


                  {
                    alignment: 'right',
                    text: 'SOLICITADO POR (Nombre y Firma) ',
                    style: {
                      bold: true,

                    }
                  },


                ]
              }
            ]
          ]
        }
      },


    ],
  }

  constructor(xml: string) {
    this.xml = XmlToJson(xml)
  }

  public async getDocument(): Promise<TCreatedPdf> {
    return createPdf(this.docDefinition);
  }

}
